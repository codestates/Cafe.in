const { post, hash_tag, click_hashtag } = require("../../models");

module.exports = async (req, res) => {
  const { lat, long, location, lastid, category } = req.params;
  //통상적으로 불가능한 요청
  if (lat === "" || long === "" || location === "") {
    return res.status(400).send({
      data: [],
      message: "사용자님의 현재 위치를 알 수 없어요",
      subMessage: "위치정보 수집에 동의해주시거나 임의의 지역을 선택해주세요",
    });
  }
  //lastid, category는 요청 단계에서 안 들어올 수 없음. 절대란 건 없긴 한데 걍 안써놓음 일단

  const selectedPost = await post.findAll({
    where: { location },
    include: [
      {
        model: hash_tag,
        where: { category, type: "positive" },
      },
    ],
  });

  if (selectedPost.length === 0) {
    return res.status(201).send({
      data: [],
      message: "현재 서비스되고 있지 않은 지역입니다",
    });
  }

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

  const a = count.map((fill) => {
    return fill.filter((fill) => {
      return fill.type === "positive";
    });
  });

  a.map((fill) => {
    fill.map((fill) => {
      for (let i = 0; i < countsHashTags.length; i++) {
        if (fill.id === countsHashTags[i]) fill.counts++;
      }
    });
  });

  const positiveTag = a.map((fill) => fill.sort((a, b) => b.counts - a.counts));

  res.status(200).send({ data: { listUp, positiveTag } });
};
