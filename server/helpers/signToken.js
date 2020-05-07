const jwt = require("jsonwebtoken");

module.exports = (payload) => {
  return( 
    jwt.sign(payload, process.env.SECRETKEY, {
      expiresIn: "1y"
    }))
};
