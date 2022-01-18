import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";
import * as Styled from "./MainListSection.styled";
import MainListFragment from "./MainListFragment";
import { distanceCalc } from "../../utils/helper/DistCalculator";
import imgurl7 from "../../assets/images/png7.png";
import imgurl8 from "../../assets/images/menu.png";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import { postCountAction, userLocationAction } from "../../store/actions";
import { useNavigate } from "react-router-dom";
import { login, loginUserInfo, showModal } from "../../store/actions";

const MainListSection = () => {
  //! 서버 연동시 다음 주석해제
  const [main, setMain] = useState([]);

  const [ref, inView] = useInView();

  const location = useSelector((state) => state.addressReducer.currAddr);
  const latlng = useSelector((state) => state.userLocation.userLatLong);
  const listCount = useSelector((state) => state.listCountReducer.listCount);
  const category = useSelector((state) => state.categoryReducer.category);
  const isLogin = useSelector((state) => state.isLogin.isLogin);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const mainSearchHandle = (data) => {
    setMain(data);
  };

  useEffect(() => {
    //!아랫줄은 완성 후 삭제
    //dispatch(userLocationAction(37.4988, 127.06314));
    //!
    location &&
      axios
        .get(
          `http://localhost:8080/posts/cafe-list/${location}/lat/${
            latlng.lat
          }/long/${latlng.long}/${listCount}/${isLogin}/${
            category === "" ? "" : category
          }`,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          setMain(res.data.data.listUp);
        })
        .catch(() => {
          // alert("세션이 만료되어 자동으로 로그아웃됩니다");
          // dispatch(login(false));
          // dispatch(loginUserInfo(null));
          //dispatch(showModal(true));
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
          <Styled.Img8 src={imgurl8} />
          {listMap}

          {/* {main === null ? (
          <h3>로딩중</h3>
        ) : ( 
          main.map((fill) => {
            return (
              <MainSectionFragment
                id={fill.id}
                title={fill.title}
                title_img={fill.title_img}
                likes_hash_tags={fill.likes_hash_tags}
                lat={fill.lat}
                long={fill.long}
                mainSearchHandle={mainSearchHandle}
              />
            );
          })
        )} */}
        </Styled.MainSectionSection>
      </IconContext.Provider>
      <div ref={ref}></div>
    </>
  );
};
export default MainListSection;

// {!main ? (
//   <h3>로딩중</h3>
// ) : (
//   main.map((fill) => {
//     return (
//       <MainSectionFragment
//         contents={fill}
//         key={fill.id}
//         mainSearchHandle={mainSearchHandle}
//       />
//     );
//   })
// )}
