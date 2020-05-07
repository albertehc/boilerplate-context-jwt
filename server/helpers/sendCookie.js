module.exports = (res, token) => {
  res.cookie(process.env.WEBSITENAME, token, {
    maxAge: parseInt(process.env.COOKIEEXPIRATION),
    httpOnly: true,
    secure: false
  }).status(200).json('OK')
}