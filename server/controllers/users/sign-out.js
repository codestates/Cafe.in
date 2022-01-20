module.exports = async (req, res) => {

  const cookieOptions = {
    sameSite: 'none',
    secure: true,
    httpOnly: true,
    path: '/',
    domain: 'cafestudy.click'
  }

  res.clearCookie("accessToken", cookieOptions);
  return res.redirect(200, "/");
};
