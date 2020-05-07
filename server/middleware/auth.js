const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  if (!req.cookies[process.env.WEBSITENAME]) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  const token = req.cookies[process.env.WEBSITENAME];
  try {
    const signature = jwt.verify(token, process.env.SECRETKEY);
    req.body.token = signature;
    next();
  } catch (e) {
    console.error(e);
    res.status(401).json({ msg: "No valid Token" });
  }
};
