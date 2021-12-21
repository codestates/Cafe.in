const { post, dislikes_hash_tag, likes_hash_tag } = require("../../models");
const { isAccessToken } = require('../modules/jwt')

module.exports = async (req, res) => {
  // JWT토큰 인증방식 -> 로그인에 성공한 모든 클라이언트는 cookies에 accessToken이 있다.
  // 없으면 접근불가 구현 -> 클라이언트에서 상태를 통해 변경하지만 서버에서 검증하는 부분
  const accessToken = req.cookies.accessToken;
  if(accessToken === null || !accessToken) {
    return isAccessToken(res)
  }

  // cafe-list는 모든 게시글을 뿌려주는 기능을 한다.
  // 모든 게시글에는 연관(조인)되어 있는 좋아요, 싫어요 해시태그가 있다.
  // findAll() 함수의 인자를 통해 join 구현
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

  // 데이터베이스 조회가 성공 할 경우 성공코드 200과 
  // 좋아요, 싫어요 해시태그가 각각의 포스트에 달린 allPost 데이터 전송 (형태: 배열)
  res.status(200).send({ data: allPost });
};
