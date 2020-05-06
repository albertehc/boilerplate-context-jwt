const User = require('./../models/User');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

exports.login = async (req, res) => {
    console.log(1);
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
        
        const payload = { user: { id: _id, username, email} }

        console.log(user)
    } catch (e) {
        console.log(e);
    }
}
