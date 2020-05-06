const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  try {
    const signature = jwt.verify(token, process.env.SECRETKEY);
    req.body.token = signature.token;
    next();
  } catch (e) {
    console.error(e);
    res.status(401).json({ msg: "No valid Token" });
  }
};
