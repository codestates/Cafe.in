const { post, hash_tag, click_hashtag } = require("../../models");
const { isAccessToken, accessTokenDecoded } = require("../modules/jwt");
const { failedResponse } = require("../modules/response");

module.exports = async (req, res) => {
  const accessToken = req.cookies.accessToken;
  if (accessToken === null || !accessToken) {
    return isAccessToken(res);
  }

  const { hashtag, category, type, postid } = req.body;

  if (!hashtag || hashtag === "") {
    return failedResponse(res, 400, "해시태그를 입력해주세요.");
  }

  const selectedPost = await post.findOne({
    where: { id: postid },
  });

  const findHash = await hash_tag.findOne({
    where: { category, name: hashtag },
  });

  if (findHash) {
    const equelPost = await selectedPost.getHash_tags();
    const filterPostId = equelPost.filter(
      (fill) =>
        fill.posts_hash_tags.post_id === Number(postid) &&
        fill.posts_hash_tags.hash_tag_id === findHash.id
    );
    if (filterPostId.length === 0) {
      const finishHash = await selectedPost.addHash_tag(findHash.id);
      return res.status(200).send({
        data: filterPostId,
        message: "존재하는 거니까 db에는 안 넣고 관계만 찍어줌",
      });
    }
    //advenced : 이미 존재하는 해시태그의 counts를 1 늘립니다
    return res
      .status(200)
      .send({ message: "이미 존재하는 해시태그입니다. 좋아요를 눌러보셔요" });
  }

  const addHash = await hash_tag.create({
    type,
    name: hashtag,
    counts: 0,
    category,
  });

  const finishHash = await selectedPost.addHash_tag(addHash.id);

  const userInfo = accessTokenDecoded(accessToken);

  const addLike = await click_hashtag.create({
    post_id: postid,
    user_id: userInfo.id,
    like_id: addHash.id,
  });

  res.status(200).send({
    data: { addHash, finishHash },
    message: "해시태그가 등록되었습니다",
  });
};
