const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const usersController = require('../controllers/users');
const checkAuth = require('../middleware/check-auth');

router.post('/signup',
    [
        body('firstname').not().isEmpty(),
        body('lastname').not().isEmpty(),
        body('email').normalizeEmail().isEmail(),
        body('password').isLength({ min: 5 })
    ],
    usersController.signup
);

router.post('/login',
    [
        body('email').normalizeEmail().isEmail(),
        body('password').isLength({ min: 5 })
    ],
    usersController.login
);

router.get('/count', usersController.getUserCount);

router.use(checkAuth);

router.get('/', usersController.getUsers);

router.get('/:uid', usersController.getUserById);

module.exports = router;