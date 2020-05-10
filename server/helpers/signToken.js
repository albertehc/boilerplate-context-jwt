const jwt = require("jsonwebtoken");

module.exports = (payload) => {
  const { id } = payload;
  return( 
    jwt.sign({ id }, process.env.SECRETKEY, {
      expiresIn: process.env.TOKENEXPIRATION
    }))
};
