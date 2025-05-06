const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find({}, '-password');
        res.json({ users: users.map(user => user.toObject({ getters: true })) });
    } catch (err) {
        return next(new HttpError('Fetching users failed, please try again later.', 500));
    }
};

exports.signup = async (req, res, next) => {
    console.log('Signup request body:', req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log('Validation errors:', errors.array());
        return next(new HttpError('Invalid inputs passed, please check your data.', 422));
    }
    
    const { firstname, lastname, email, password } = req.body;
    
    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        return next(new HttpError('Signing up failed, please try again later.', 500));
    }
    
    if (existingUser) {
        return next(new HttpError('User exists already, please login instead.', 422));
    }
    
    let hashedPassword;
    try {
        hashedPassword = await bcrypt.hash(password, 12);
    } catch (err) {
        return next(new HttpError('Could not create user, please try again.', 500));
    }
    
    const createdUser = new User({
        firstname,
        lastname,
        email,
        password: hashedPassword,
        cart: { items: [] }
    });
    
    try {
        await createdUser.save();
    } catch (err) {
        return next(new HttpError('Signing up failed, please try again.', 500));
    }
    
    // Generate token
    let token;
    try {
        token = jwt.sign(
            { userId: createdUser.id, email: createdUser.email },
            'supersecret_dont_share',  // Using your secret key
            { expiresIn: '1h' }
        );
    } catch (err) {
        return next(new HttpError('Signing up failed, please try again.', 500));
    }
    
    res.status(201).json({ 
        userId: createdUser.id, 
        email: createdUser.email,
        token: token 
    });
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    
    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        return next(new HttpError('Logging in failed, please try again later.', 500));
    }
    
    if (!existingUser) {
        return next(new HttpError('Invalid credentials, could not log you in.', 401));
    }
    
    let isValidPassword = false;
    try {
        isValidPassword = await bcrypt.compare(password, existingUser.password);
    } catch (err) {
        return next(new HttpError('Could not log you in, please check your credentials and try again.', 500));
    }
    
    if (!isValidPassword) {
        return next(new HttpError('Invalid credentials, could not log you in.', 401));
    }
    
    // Generate token
    let token;
    try {
        token = jwt.sign(
            { userId: existingUser.id, email: existingUser.email },
            'supersecret_dont_share',  // Using your secret key
            { expiresIn: '1h' }
        );
    } catch (err) {
        return next(new HttpError('Logging in failed, please try again.', 500));
    }
    
    res.json({ 
        userId: existingUser.id, 
        email: existingUser.email,
        token: token 
    });
};