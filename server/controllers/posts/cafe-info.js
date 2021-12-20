const { post, likes_hash_tag, dislikes_hash_tag } = require("../../models");

module.exports = async (req, res) => {
  const accessToken = req.cookies.accessToken;
  if (accessToken === null || !accessToken) {
    return res.status(401).send({
      data: null,
      message: "인증되지 않은 사용자 입니다.",
    });
  }

  const caffeInfo = await post.findOne({
    where: { id: req.params.id },
  });

  const likeHash = await likes_hash_tag.findAll({
    include: {
      model: post,
      where: { id: req.params.id },
    },
  });

  const dislikeHash = await dislikes_hash_tag.findAll({
    include: {
      model: post,
      where: { id: req.params.id },
    },
  });

  return res.status(200).send({ data: { caffeInfo, likeHash, dislikeHash } });
};

/*
    // 1. 게시글에 포함된 해시태그를 가져와서 띄워줘야 함
    // = cafe-info에 포함되어 있어야 함?

    // 2. 해시태그로 검색을 하면 해시태그가 달린 게시글을 가져와야 함
    // = 해시태그가 달린 걸로 검색한다

    // 3. 해시태그를 게시글에 작성할 수 있다
    // = #알바예쁨 -> 알바예쁨이 hash 모델에 있는지 확인 ->
    // 이거를 post에 연결시켜주기 
    


















    a게시물의 a해시태그를 누른 유저가
    b게시물의 a해시태그를 눌렀을 때
    likes 테이블에는 같은 user_id, likehash_id로 들어가므로
    그냥 전부 좋아요가 눌려버린 셈
    즉 게시글마다 해시태그랑 user랑 관계를 맺는 걸 따로 분리해줘야 함
    = 게시글엔 고유 해시태그로 들어가줘 야함 (게시만의 카운트)

    4. 좋아요 기능 - 해시태그 클릭시 좋아요 카운트가 1 오름
    = 많이 어렵다;;;
    A 유저는 a해시태그에 좋아요를 눌렀고, z해시태그에 싫어요를 눌렀습니다
    A 유저는 b해시태그에 좋아요를 눌렀고, y해시태그에 싫어요를 눌렀습니다
    B 유저는 b해시태그에 좋아요를 눌렀고, x해시태그에 싫어요를 눌렀습니다
    C 유저는 a해시태그에 좋아요를 눌렀고, y해시태그에 싫어요를 눌렀습니다

    유저와 해시태그는 다대다

*/
