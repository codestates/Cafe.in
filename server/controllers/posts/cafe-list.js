const { post, hash_tag, click_hashtag } = require("../../models");
const { accessTokenDecoded } = require("../modules/jwt");

module.exports = async (req, res) => {
  const { lat, long, location, lastid, islogin } = req.params;

  const accessToken = req.cookies.accessToken;

  if (islogin && accessTokenDecoded(accessToken) === "null") {
    res.clearCookie("accessToken", { path: "/" });
    return res.redirect(401, "/");
    //.send({ message: "세션이 만료되었습니다. 다시 로그인해주세요." });
  }

  if (lat === "" || long === "" || location === "") {
    return res.status(400).send({
      data: [],
      message: "사용자님의 현재 위치를 알 수 없어요",
      subMessage: "위치정보 수집에 동의해주시거나 임의의 지역을 선택해주세요",
    });
  }

  const selectedPost = await post.findAll({
    where: { location },
    include: [
      {
        model: hash_tag,
      },
    ],
  });

  if (selectedPost.length === 0) {
    return res.status(200).send({
      data: [],
      message: "현재 서비스되고 있지 않은 지역입니다",
    });
  }
  //좌표간 거리를 1000m 단위로 나타냄
  const deg2rad = (deg) => deg * (Math.PI / 180);
  const R = 6371;
  const result = selectedPost.map((fill) => {
    const dLat = deg2rad(fill.lat - lat);
    const dLon = deg2rad(fill.long - long);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat)) *
        Math.cos(deg2rad(fill.lat)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return Math.round(d * 1000);
  });

  selectedPost.map((fill, idx) => {
    fill.distance = result[idx];
  });

  //allPost를 만든 다음 거기에 distance를 넣는 것이기 때문에 order는 먹지 않는다
  const cafeList = selectedPost.sort((a, b) => a.distance - b.distance);

  const listUp = [];

  for (let i = 0; i < lastid; i++) {
    cafeList[i] && listUp.push(cafeList[i]);
  }

  const getHashtagId = await click_hashtag.findAll({
    where: { post_id: listUp.map((fill) => fill.id) },
  });

  const countsHashTags = getHashtagId.map((fill) => {
    return fill.like_id;
  });

  const count = listUp.map((fill) => fill.hash_tags);

  const findPosHash = count.map((fill) => {
    return fill.filter((fill) => {
      return fill.type === "positive";
    });
  });

  findPosHash.map((fill) => {
    fill.map((fill) => {
      for (let i = 0; i < countsHashTags.length; i++) {
        if (fill.id === countsHashTags[i]) fill.counts++;
      }
    });
  });

  const sortPositiveTag = findPosHash.map((fill) =>
    fill.sort((a, b) => b.counts - a.counts)
  );

  const positiveTag = sortPositiveTag.map((fill) =>
    fill.length >= 3 ? fill.slice(0, 3) : fill
  );

  res.status(200).send({ data: { listUp, positiveTag } });
};
