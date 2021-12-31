const { post, likes_hash_tag } = require("../../models");
const { isAccessToken } = require('../modules/jwt')

/*get요청 - 단순하게 카페 목록을 전체 불러오는 것 */
module.exports = async (req, res) => {
  // JWT토큰 인증방식 -> 로그인에 성공한 모든 클라이언트는 cookies에 accessToken이 있다.
  // 없으면 접근불가 구현 -> 클라이언트에서 상태를 통해 변경하지만 서버에서 검증하는 부분
  const accessToken = req.cookies.accessToken;
  if(accessToken === null || !accessToken) {
    return isAccessToken(res)
  }

  // 검색기능 (좋아요 해시태그를 누를 시, 해시태그가 달린 게시물을 불러와야 한다.)
  // 클라이언트 요청 -> GET요청, params에 해시태그의 id와 함께 요청을 받음
  // 해시태그 id를 통해 DB를 조회하며 조회 된 결과물을 클라이언트에게 전송
  const targetPost = await post.findAll({
    include: [
      {
        model: likes_hash_tag,
        where: { id: req.params.id },
        attributes: { exclude: "id" },
      },
    ],
  });

  // DB가 조회가 성공하면 성공코드 200과 조건에 맞는 게시물을 클라이언트에게 전송
  res.status(200).send({ data: targetPost });
};
