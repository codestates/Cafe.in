const { post, dislikes_hash_tag, likes_hash_tag } = require("../../models");

/*get요청 - 단순하게 카페 목록을 전체 불러오는 것 */
module.exports = async (req, res) => {
  const accessToken = req.cookies.accessToken;
  if (accessToken === null || !accessToken) {
    return res.status(401).send({
      data: null,
      message: "인증되지 않은 사용자 입니다.",
    });
  }
  /*
  지금 보여주는 건 로그인이 됐을 때 처음 보는 화면 = 토큰을 갖고 있습니다
  근데 토큰이 없는채로 들어올 때를 생각해서 위에 하나 걸러주기 대작전
  */

  const allPost = await post.findAll({
    include: [
      {
        model: dislikes_hash_tag,
        attributes: { exclude: "id" },
      },
      {
        model: likes_hash_tag,
        attributes: { exclude: "id" },
      },
    ],
  });

  res.status(200).send({ data: allPost });
};
