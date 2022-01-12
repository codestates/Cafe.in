import React, { useEffect, useState } from "react";
import { MainListSection } from "../../components";
import { MainInfoSection } from "../../components";
import { homeObjOne } from "./MainInfoData";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  postCountAction,
  postCategoryAction,
  postCountHashAction,
} from "../../redux/reducer/post";
import { loginAction } from "../../redux/reducer/user";
import { useInView } from "react-intersection-observer";

const MainPage = ({ location }) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer);
  const postState = useSelector((state) => state.postReducer);
  const { userLatLong, isLoggedIn } = userState;
  const { listCount, category } = postState;

  const [noPlace, setNoPlace] = useState(false);
  const [click, setClick] = useState(false);
  const [list, setList] = useState(null);

  const [ref, inView] = useInView();

  useEffect(() => {
    location &&
      axios
        .get(
          `http://localhost:8080/posts/cafe-list/${location}/lat/${
            userLatLong.lat
          }/long/${userLatLong.long}/${listCount}/${category && category}`,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.data.length === 0) setNoPlace(true);
          dispatch(postCountHashAction(res.data.data.positiveTag));
          setList(res.data.data.listUp);
        });
  }, [location, listCount]);

  useEffect(() => {
    const url = new URL(window.location.href);
    const hash = url.hash;
    const kakaoCode = url.searchParams.get("code");
    if (hash.includes("google")) {
      const token = hash.split("=")[1].split("&")[0];
      axios
        .get(
          `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${token}`
        )
        .then((res) => {
          console.log(res.data);
          axios
            .post(
              `http://localhost:8080/users/sign-in-oauth/google`,
              {
                user_email: res.data.email,
                nickname: res.data.name,
                profile_img: res.data.picture,
              },
              {
                withCredentials: true,
                "Content-Type": "application/json",
              }
            )
            .then((res) => {
              dispatch(loginAction(res.data.data.payload));
            });
          //여기서 받은 정보로 axios보내서 db에 저장해주기하면?
        })
        .catch((err) => console.log(err));
    } else if (kakaoCode) {
      axios
        .post("http://localhost:8080/users/sign-in-oauth/kakao", { kakaoCode })
        .then((res) => {
          dispatch(loginAction(res.data.data.payload));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    if (inView) dispatch(postCountAction());
    //ref는 컴포넌트에 걸어준다
    //inView는 ref를 사용자가 보고 있으면 true로, 안 보이면 false로 바꿔줌
    //즉 얘가 화면을 감지해주는 거임
  }, [inView]);

  return (
    <>
      {!isLoggedIn && <MainInfoSection homeObjOne={homeObjOne} />}
      <MainListSection list={list} />
      <div ref={ref}></div>
    </>
  );
};

export default MainPage;
