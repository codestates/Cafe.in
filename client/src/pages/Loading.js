import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loginAction } from "../redux/reducer/user";
import { useDispatch } from "react-redux";

export default function Loading() {
  // let navigate = useNavigate();
  // navigate("/");
  //window.location.assign("/");
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const url = new URL(window.location.href);
  //   const hash = url.hash;
  //   const kakaoCode = url.searchParams.get("code");
  //   if (hash.includes("google")) {
  //     const token = hash.split("=")[1].split("&")[0];
  //     axios
  //       .get(
  //         `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${token}`
  //       )
  //       .then((res) => {
  //         console.log(res.data);
  //         axios
  //           .post(
  //             `http://localhost:8080/users/sign-in-oauth/google`,
  //             {
  //               user_email: res.data.email,
  //               nickname: res.data.name,
  //               profile_img: res.data.picture,
  //             },
  //             {
  //               withCredentials: true,
  //               "Content-Type": "application/json",
  //             }
  //           )
  //           .then((res) => {
  //             dispatch(loginAction(res.data.data.payload));
  //           });
  //         //여기서 받은 정보로 axios보내서 db에 저장해주기하면?
  //       })
  //       .catch((err) => console.log(err));
  //   } else if (kakaoCode) {
  //     axios
  //       .post("http://localhost:8080/users/sign-in-oauth/kakao", { kakaoCode })
  //       .then((res) => {
  //         dispatch(loginAction(res.data.data.payload));
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, []);
  return <div>토큰 받았니 승준아?</div>;
}
