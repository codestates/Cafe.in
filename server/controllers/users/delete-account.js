const { user } = require("../../models");

module.exports = async (req, res) => {
  /* email을 가져오는 건 axios요청으로 딜리트 요청을 보낼 때
  클라이언트에서 email을 상태 정의된 (= 로그인된) 사용자의 email을 쥐도새도 모르게 보내고
  패스워드는 e.target.value 등으로 다시 한 번 쓴 걸로 body에 솔직하게 보내기 */
  const userInfo = await user.findOne({
    where: { user_email: req.body.user_email, password: req.body.password },
  });

  if (!userInfo)
    return res.status(400).send("비밀번호를 제대로 안 입력했네요 쯧쯧");

  const deleteAccount = await user.destroy({
    where: { user_email: userInfo.user_email, password: userInfo.password },
  });
  if (deleteAccount === 1) {
    res.clearCookie("accessToken");
    res.status(200).send({ message: "더러웠고 다신 만나지말자" });
  }
};
