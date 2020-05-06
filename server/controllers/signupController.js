const User = require('./../models/User');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

exports.signup = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const { email,password } = req.body;

    try {
        let user = await User.findOne({email});
        if (user) {
            return res.status(400).json({msg: 'Email already exist'});
        }
        req.body.password = bcryptjs.hashSync(password,10);
        await User.create(req.body)

        const payload = {
            user: {
                id: req.body.id
            }
        }

        jwt.sign(payload, process.env.SECRETKEY,{
            expiresIn: 31536000 // 1 Year
        },(error, token) => {
            if (error) throw error;
            res.json({token});
        })
    } catch (e) {
        console.log(e);
        res.status(400).send('An error ocurred');
    }
}