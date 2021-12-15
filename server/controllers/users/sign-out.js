module.exports = async (req, res) => {
  res.clearCookie("accessToken", { path: "/" });
  return res.redirect(200, "/");
};
//클라 떴을 때 토큰 제대로 지워지는지 확인합시다
