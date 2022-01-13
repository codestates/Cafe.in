import React, { useEffect, useState } from "react";
import { MainListSection } from "../../components";
import { MainInfoSection } from "../../components";
import { homeObjOne } from "./MainInfoData";
import { login, loginUserInfo, showModal } from "../../store/actions";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
// import { login } from "../../store/actions";

const MainPage = () => {
  // Redux
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.isLogin.isLogin);

  useEffect(() => {
    const url = new URL(window.location.href);
    const hash = url.hash;

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
              dispatch(showModal(false));
              dispatch(loginUserInfo(res.data.data.payload));
              dispatch(login(true));
            });
        })
        .catch((err) => console.log(err));
    }
  }, []);
  return (
    <>
      {!isLogin && <MainInfoSection homeObjOne={homeObjOne} />}
      <MainListSection />
    </>
  );
};

export default MainPage;
