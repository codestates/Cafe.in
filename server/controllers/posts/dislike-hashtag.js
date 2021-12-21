const { post, dislikes_hash_tag } = require("../../models");
const { isAccessToken } = require('../modules/jwt')

module.exports = async (req, res) => {
  // ===================================================================

  // like-hashtag.js와 코드 로직(구조)이 동일 -> 데이터의 서비스 기능 차이

  // ===================================================================
  const accessToken = req.cookies.accessToken;
  isAccessToken(accessToken, res)

  const hashtag = req.body.disLike;

  if (!hashtag) {
    return res.status(400).send({ data: null, message: "쓰읍!" });
  }

  const selectedPost = await post.findOne({
    where: { id: req.params.id },
  });

  const findHash = await dislikes_hash_tag.findOrCreate({
    where: { name: hashtag },
  });

  const finishHash = await selectedPost.addDisikes_hash_tag(findHash[0].id);

  res.status(200).send({ data: { findHash, finishHash } });
};
