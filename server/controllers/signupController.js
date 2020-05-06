const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const signToken = require('./../helpers/signToken');
const User = require('./../models/User');

exports.signup = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const { email, password, username } = req.body;

    try {
        let user = await User.findOne({email});
        if (user) {
            return res.status(400).json({msg: 'Email already exist'});
        }
        const salt = await bcryptjs.genSalt(10);
        req.body.password = await bcryptjs.hash(password,salt);
        const userDB = await User.collection.insertOne({...req.body, created_at: Date.now(), updated_at: Date.now()});
        const { _id } = userDB.ops[0];
        const payload = { user: { id: _id, username, email} }
        res.json(signToken(payload));
        
    } catch (e) {
        console.error(e);
        res.status(400).send('An error ocurred');
    }
}