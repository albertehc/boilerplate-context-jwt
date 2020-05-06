const express = require('express');
const router = express.Router();
const signupController = require('./../controllers/signupController');
const {check} = require('express-validator');

// /api/signup/

router.post('/',
    [
        check('username', 'username is required').not().isEmpty(),
        check('email', 'Email not valid').isEmail(),
        check('password', 'Password too short (min 8)').isLength({min:8,max:24})
    ],
    signupController.signup
)

module.exports = router;