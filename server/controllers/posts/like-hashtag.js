const { post, likes_hash_tag } = require("../../models");

module.exports = async (req, res) => {
  const accessToken = req.cookies.accessToken;
  if (accessToken === null || !accessToken) {
    return res.status(401).send({
      data: null,
      message: "인증되지 않은 사용자 입니다.",
    });
  }

  const hashtag = req.body.like;

  if (!hashtag) {
    return res.status(400).send({ data: null, message: "쓰읍!" });
  }

  const selectedPost = await post.findOne({
    where: { id: req.params.id },
  });

  const findHash = await likes_hash_tag.findOrCreate({
    where: { name: hashtag },
  });

  const finishHash = await selectedPost.addLikes_hash_tag(findHash[0].id);

  res.status(200).send({ data: { findHash, finishHash } });
};
