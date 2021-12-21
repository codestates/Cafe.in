const { post } = require("../../models");
const { isAccessToken } = require('../modules/jwt')

module.exports = async (req, res) => {
  // JWT토큰 인증방식 -> 로그인에 성공한 모든 클라이언트는 cookies에 accessToken이 있다.
  // 없으면 접근불가 구현 -> 클라이언트에서 상태를 통해 변경하지만 서버에서 검증하는 부분
  const accessToken = req.cookies.accessToken;
  if(accessToken === null || !accessToken) {
    return isAccessToken(res)
  }

  // 클라이언트 요청 -> GET요청, params에 클릭 된 게시물의 id와 함께 요청
  // 요청받은 게시물의 id를 통해 DB에서 고유한 게시물 검색
  // 게시물의 id는 유일성을 만족하므로 1개의 결과물만 나온다. -> findOne() 사용 
  const cafeInfo = await post.findOne({
    where: { id: req.params.id },
  });

  // 클릭한 게시물에 달려 있는 좋아요, 싫어요 해시태그 받아오기
  const hashes = await cafeInfo.getLikes_hash_tags();
  const disHashes = await cafeInfo.getDislikes_hash_tags();

  // 게시물과 각각의 해시태그를 성공적으로 조회가 되면,
  // 성공코드 200과 게시물, 좋아요, 싫어요 해시태그 클라이언트에게 전송
  return res.status(200).send({ data: { cafeInfo, hashes, disHashes } });
};
