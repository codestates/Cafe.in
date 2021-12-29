import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Hashtag({ text, id, mainSearchHandle }) {
  const [selectedHash, setSelectedHash] = useState(null);

  const hashSearch = () => {
    axios
      .get(`http://localhost:8080/posts/cafe-list/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        //let fst = res.data.data.targetPost.map((fill) => fill.likes_hash_tags);
        mainSearchHandle(res.data.data.result);
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
