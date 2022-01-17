const { post, hash_tag, click_hashtag } = require("../../models");
const { isAccessToken, accessTokenDecoded } = require("../modules/jwt");
const { failedResponse } = require("../modules/response");

module.exports = async (req, res) => {
  const accessToken = req.cookies.accessToken;
  const { islogin } = req.params;

  if (accessToken === null || !accessToken) {
    return isAccessToken(res);
  }

  if (accessTokenDecoded(accessToken).type === "nomal") {
    return res.status(401).send({ message: "잘못된 요청입니다" });
  }

  const { hashid, postid, type } = req.body;

  const selectedPost = await post.findOne({ where: { id: postid } });

  const removeHash = await selectedPost.removeHash_tags(hashid);

  const removeRelation = await click_hashtag.destroy({
    where: {
      like_id: hashid,
      post_id: postid,
      like_type: type,
    },
  });

  res.status(200).send({ message: "태그 지움" });
};
