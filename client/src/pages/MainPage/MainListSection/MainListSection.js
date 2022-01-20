import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";
import * as Styled from "./MainListSection.styled";
import MainListFragment from "./MainListFragment";
import { distanceCalc } from "../../../utils/helper/DistCalculator";
import imgurl8 from "../../../assets/images/menu.png";
import imgurl9 from "../../../assets/images/Untitled-1.png";
import { useSelector, useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import { postCountAction } from "../../../store/actions";
import axiosConfig from "../../../axiosConfig";

const MainListSection = () => {
  const [main, setMain] = useState([]);
  const [ref, inView] = useInView();

  const location = useSelector((state) => state.addressReducer.currAddr);
  const latlng = useSelector((state) => state.userLocation.userLatLong);
  const listCount = useSelector((state) => state.listCountReducer.listCount);
  const category = useSelector((state) => state.categoryReducer.category);
  const isLogin = useSelector((state) => state.isLogin.isLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    location &&
      axiosConfig
        .get(
          `/posts/cafe-list/${location}/lat/${latlng.lat}/long/${
            latlng.long
          }/${listCount}/${isLogin}/${category === "" ? "" : category}`
        )
        .then((res) => {
          setMain(res.data.data.listUp);
        })
        .catch(() => {
          // alert("세션이 만료되어 자동으로 로그아웃됩니다");
          // dispatch(login(false));
          // dispatch(loginUserInfo(null));
          // dispatch(showModal(true));
        });
  }, [location, listCount, category]);

  useEffect(() => {
    if (inView) dispatch(postCountAction());
    //ref는 컴포넌트에 걸어준다
    //inView는 ref를 사용자가 보고 있으면 true로, 안 보이면 false로 바꿔줌
    //즉 얘가 화면을 감지해주는 거임
  }, [inView]);

  const listMap =
    main &&
    main.map(({ id, title, small_img, lat, long, hash_tags }) => {
      let dist =
        Math.round(
          (distanceCalc(latlng.lat, latlng.long, lat, long) + Number.EPSILON) *
            100
        ) / 100;
      return (
        <MainListFragment
          key={id}
          id={id}
          title={title}
          title_img={small_img}
          dist={dist}
          likes_hash_tags={hash_tags.filter((fill) => fill.type === "positive")}
        />
      );
    });

  return (
    <>
      <IconContext.Provider value={{ color: "#472d0c" }}>
        <Styled.MainSectionSection>
          {location === "서비스 지역 외" && imgurl9 ? (
            <>
              <br />
              <Styled.Img9 src={imgurl9} />
            </>
          ) : (
            <Styled.Img8 src={imgurl8} />
          )}
          {listMap}
        </Styled.MainSectionSection>
      </IconContext.Provider>
      <div ref={ref}></div>
    </>
  );
};
export default MainListSection;
