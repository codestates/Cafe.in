const { user, hash_tag, post, click_hashtag } = require("../../models");
const { isAccessToken } = require("../modules/jwt");

module.exports = async (req, res) => {
  const accessToken = req.cookies.accessToken;
  if (accessToken === null || !accessToken) {
    return isAccessToken(res);
  }

  let { userId, hashId, postId } = req.body;

  !userId ? (userId = 0) : userId;
  const selectedPost = await post.findOne({
    where: { id: postId },
    include: [
      {
        model: hash_tag,
      },
    ],
  });

  const a = selectedPost.hash_tags.filter((fill) => fill.id === hashId);

  const tagId = a[0].id;

  const insertLike = await click_hashtag.findOne({
    where: { user_id: userId, post_id: postId, like_id: tagId },
    defaults: {
      post_id: postId,
      user_id: userId,
      like_id: tagId,
    },
  });

  if (insertLike) {
    const deleLike = await click_hashtag.destroy({
      where: {
        post_id: postId,
        user_id: userId,
        like_id: tagId,
      },
    });
    res.status(200).send({ data: deleLike, message: "태그 좋아요 취소" });
  } else {
    const addLike = await click_hashtag.create({
      post_id: postId,
      user_id: userId,
      like_id: tagId,
    });
    res.status(200).send({ data: addLike, message: "태그 좋아요 추가" });
  }
};
