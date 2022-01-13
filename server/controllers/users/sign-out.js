module.exports = async (req, res) => {
  res.clearCookie("accessToken", { path: "/" });
  return res.redirect(200, "/");
};
