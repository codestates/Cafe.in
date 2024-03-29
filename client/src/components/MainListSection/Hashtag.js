import axiosConfig from "../../axiosConfig";
import React, { useEffect, useState } from "react";

export default function Hashtag({ text, id, mainSearchHandle }) {
  const [selectedHash, setSelectedHash] = useState(null);

  const hashSearch = () => {
    axiosConfig.get(`/posts/cafe-list/${id}`)
      .then((res) => {
      let fst = res.data.data.map((fill) => fill.likes_hash_tags);
      let sec = fst.map((fill) => fill[0].name);
      if (selectedHash === sec[0]) {
        return;
      }
      mainSearchHandle(res.data.data);

      setSelectedHash(sec[0]);
    });
  };

  return (
    <>
      {!text ? (
        ""
      ) : (
        <div>
          {text.split(/(#[^\s#]+)/g).map((fill) => {
            if (fill.match(/(#[^\s#]+)/g))
              return <a onClick={hashSearch}>{fill} </a>;
          })}
        </div>
      )}
    </>
  );
}
