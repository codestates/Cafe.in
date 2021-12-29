import React, { useEffect, useState } from "react";
import { dummyData } from "./Data";
import { MainSection } from "../../components";
import axios from "axios";

function MainPage() {
  const [main, setMain] = useState(null);
  const [list, setList] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/posts/cafe-list", {
        withCredentials: true,
      })
      .then((res) => {
        setMain(res.data.data);
      });
  }, [list]);

  //여기가 로그인 후 메인 페이지
  const mainSearchHandle = (data) => {
    setMain(data);
  };

  return (
    <>
      <button onClick={() => setList((prev) => !prev)}>검색옵션 초기화</button>
      <MainSection main={main} mainSearchHandle={mainSearchHandle} />
    </>
  );
}

export default MainPage;
