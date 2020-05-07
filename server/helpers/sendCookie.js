module.exports = (res, token) => {
  res.cookie(process.env.WEBSITENAME, token, {
    maxAge: 43200000,
    httpOnly: true,
    secure: false
  }).status(200).json('OK')
}