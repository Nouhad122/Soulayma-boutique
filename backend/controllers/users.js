const { v4: uuidv4 } = require('uuid');


const DUMMY_USERS = [
    {
        id: 'u1',
        firstname: 'Nouhad',
        lastname: 'Elhallab',
        email: 'nouhadalhallab122@gmail.com',
        password: 'nouhad123'
    }
]

 exports.getUsers = (req, res, next) =>{
    res.json({ users: DUMMY_USERS });
}

exports.signup = (req, res, next) =>{
    const { firstname, lastname, email, password} = req.body;

    const hasUser = DUMMY_USERS.find(u => u.email === email);

    if(hasUser){
        throw new Error('Email i already exists!');
    }

    const createdUser = {
        id: uuidv4(),
        firstname,
        lastname,
        email,
        password
    }

    DUMMY_USERS.push(createdUser);

    res.status(200).json({ user: createdUser});
}

exports.login = (req, res, next) =>{
    const { email, password } = req.body;

    const identifiedUser = DUMMY_USERS.find(u => u.email === email);

    if(!identifiedUser || identifiedUser.password !== password){
        throw new Error('Could not identify user, credentials seem to be wrong!')
    }

    res.json({message: 'Logged in!'})
}

