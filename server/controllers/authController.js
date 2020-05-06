const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const User = require('./../models/User');
const signToken = require('./../helpers/signToken')

exports.login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {email, password} = req.body;

    try {
        let user = await User.findOne({email});
        if (!user) return res.status(400).json({msg: 'Email or password not valid'});

        const checkPassword = bcryptjs.compare(password, user.password);
        if (!checkPassword) return res.status(400).json({msg: 'Email or password not valid'});
        

        const payload = { user: { id: user._id, username: user.username, email} }

        res.json(signToken(payload));
    } catch (e) {
        console.log(e);
        res.status(500).json({msg: 'Server error'});
    }
}

exports.me = async (req,res) => {
    try {
        const user = await User.findById
    } catch (e) {
        console.log(e);
        res.status(500).json({msg: 'Server error'});
    }
} 