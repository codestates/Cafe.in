const { post, hash_tag, click_hashtag } = require("../../models");
const { isAccessToken, accessTokenDecoded } = require("../modules/jwt");
const { failedResponse } = require("../modules/response");

module.exports = async (req, res) => {
  const accessToken = req.cookies.accessToken;
  const { islogin } = req.params;

  if (accessToken === null || !accessToken) {
    return isAccessToken(res);
  }

  if (islogin && accessTokenDecoded(accessToken) === "null") {
    res.clearCookie("accessToken", { path: "/" });
    return res.redirect(400, "/");
    //.send({ message: "세션이 만료되었습니다. 다시 로그인해주세요." });
  }

  const { hashtag, category, type, postid } = req.body;

  if (!hashtag || hashtag === "") {
    return failedResponse(res, 401, "noHash", "해시태그를 입력해주세요.");
  }

  if (!category || category === "") {
    return failedResponse(res, 401, "noCate", "카테고리를 선택해주세요");
  }

  const selectedPost = await post.findOne({
    where: { id: postid },
  });

  const findHash = await hash_tag.findOne({
    where: { category, name: hashtag, type },
  });

  if (findHash) {
    const equelPost = await selectedPost.getHash_tags();
    const filterPostId = equelPost.filter(
      (fill) =>
        fill.posts_hash_tags.post_id === Number(postid) &&
        fill.posts_hash_tags.hash_tag_id === findHash.id
    );
    console.log(filterPostId);
    if (filterPostId.length === 0) {
      const finishHash = await selectedPost.addHash_tag(findHash.id);

      const userInfo = accessTokenDecoded(accessToken);

      const addLike = await click_hashtag.create({
        post_id: postid,
        user_id: userInfo.id,
        like_id: findHash.id,
        like_type: type,
      });
      return res.status(201).send({
        data: filterPostId,
        message: "존재하는 거니까 db에는 안 넣고 관계만 찍어줌",
      });
    }
    //advenced : 이미 존재하는 해시태그의 counts를 1 늘립니다
    return failedResponse(
      res,
      401,
      "already",
      "이미 존재하는 해시태그입니다. 좋아요를 눌러보세요"
    );
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
    like_type: type,
  });

  res.status(201).send({
    data: { addHash, finishHash },
    message: "해시태그가 등록되었습니다",
  });
};
