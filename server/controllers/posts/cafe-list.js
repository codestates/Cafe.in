const { post, likes_hash_tag } = require("../../models");

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

  const allPost = await post.findAll();
  const hashTag = await Promise.all(
    allPost.map(async (el) => {
      return await el.getLikes_hash_tags();
    })
  );

  /*
    allPost = [], 객체
    hashTag = [[]], 객체 
    어떻게 담을 것인가. 배열 속 객체로 순서대로
    allPost + hashTag의 name, counts => 연결된 거 끼리

  */

  allPost.map((fill, idx) => {
    const a = (fill.long = hashTag[idx]);
    return a;
  });
  //해시태그 필드를 추가하는 게 괜찮지 않나

  res.status(200).send({ data: allPost });
};
