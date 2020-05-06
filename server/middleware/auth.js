const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    console.log(req.header('x-auth-token'))
    const token = req.header('x-auth-token');
    if (!token) { return res.status(401).json({msg: 'Unauthorized'}) }
    try {
        const signature = jwt.verify(token, process.env.SECRETKEY);
        req.body.user = signature.user;
        next();
    } catch (e) {
        res.status(401).json({msg: 'No valid Token'});
    }
}