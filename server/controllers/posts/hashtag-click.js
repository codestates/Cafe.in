const { user, hash_tag, post, click_hashtag } = require("../../models");
const { isAccessToken, accessTokenDecoded } = require("../modules/jwt");

module.exports = async (req, res) => {
  const accessToken = req.cookies.accessToken;
  const { islogin } = req.params;
  //console.log(`@@@@@@@@@@@@${accessTokenDecoded(accessToken)}`);
  //error.name 은 JsonWebTokenError

  if (accessToken === null || !accessToken) {
    return isAccessToken(res);
  }

  if (islogin && accessTokenDecoded(accessToken) === "null") {
    res.clearCookie("accessToken", { path: "/" });
    return res.redirect(401, "/");
    //.send({ message: "세션이 만료되었습니다. 다시 로그인해주세요." });
  }

  // if (islogin && accessTokenDecoded(accessToken) === "needToLogin") {
  //   return res
  //     .status(400)
  //     .send({ message: "로그인 후 마음에 드는 태그에 좋아요를 눌러보세요" });
  //   //.send({ message: "세션이 만료되었습니다. 다시 로그인해주세요." });
  // }

  let { userId, hashId, postId, type } = req.body;

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
      like_type: type,
    },
  });

  if (insertLike) {
    const deleLike = await click_hashtag.destroy({
      where: {
        post_id: postId,
        user_id: userId,
        like_id: tagId,
        like_type: type,
      },
    });
    res.status(200).send({ data: deleLike, message: "태그 좋아요 취소" });
  } else {
    const addLike = await click_hashtag.create({
      post_id: postId,
      user_id: userId,
      like_id: tagId,
      like_type: type,
    });
    res.status(200).send({ data: addLike, message: "태그 좋아요 추가" });
  }
};
