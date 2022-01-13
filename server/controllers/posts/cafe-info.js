const { post, click_hashtag, hash_tag } = require("../../models");
const { isAccessToken, accessTokenDecoded } = require("../modules/jwt");

module.exports = async (req, res) => {
  const accessToken = req.cookies.accessToken;

  let userid;
  if (!accessToken) userid = 0;
  else userid = accessTokenDecoded(accessToken).id;

  let { postid } = req.params;

  const selectedPost = await post.findOne({
    where: { id: postid },
    include: [
      {
        model: hash_tag,
      },
    ],
  });

  const getHashtagId = await click_hashtag.findAll({
    where: { post_id: postid },
  });

  const countsHashTags = getHashtagId.map((fill) => {
    return fill.like_id;
  });

  selectedPost.hash_tags.map((fill) => {
    for (let i = 0; i < countsHashTags.length; i++) {
      if (fill.id === countsHashTags[i]) fill.counts++;
    }
  });

  const positiveTag = selectedPost.hash_tags
    .filter((fill) => fill.type === "positive")
    .sort((a, b) => b.counts - a.counts);
  const negativeTag = selectedPost.hash_tags
    .filter((fill) => fill.type === "negative")
    .sort((a, b) => b.counts - a.counts);

  const getHashtagUserId = await click_hashtag.findAll({
    where: { user_id: userid },
  });

  return res.status(200).send({
    data: { userid, selectedPost, positiveTag, negativeTag, getHashtagUserId },
  });
};
