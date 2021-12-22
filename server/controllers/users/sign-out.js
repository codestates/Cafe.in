module.exports = async (req, res) => {

  // 클라이언트 요청 -> body에 아무 데이터 없음
  // JWT 인증방식으로 서버에서 받은 토큰을 제거 후 리디렉션
  res.clearCookie("accessToken", { path: "/" });
  return res.redirect(200, "/");
};
//클라 떴을 때 토큰 제대로 지워지는지 확인합시다
