const signToken = require("./../helpers/signToken");

module.exports = (res, token) => {
  res.cookie(process.env.WEBSITENAME, signToken(token), {
    maxAge: parseInt(process.env.COOKIEEXPIRATION),
    httpOnly: true,
    secure: true,
    sameSite: true
  }).status(200).json(token)
}