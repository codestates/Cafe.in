import * as Types from "./types";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const clickModalType = (clickedMenu = "") => {
  return {
    type: Types.CLICK_MODAL_TYPE,
    payload: clickedMenu,
  };
};

export const login = (isLogin = false) => {
  return {
    type: Types.LOGIN,
    payload: isLogin,
  };
};

export const showModal = (isShowModal = false) => {
  return {
    type: Types.SHOW_MODAL,
    payload: isShowModal,
  };
};

export const loginUserInfo = (userInfo = {}) => {
  return {
    type: Types.LOGIN_USER_INFO,
    payload: userInfo,
  };
};

export const userLocationAction = (lat, long) => {
  return {
    type: Types.USER_LOCATION,
    lat,
    long,
  };
};

export const userAddressAction = (data) => {
  return {
    type: Types.USER_ADDRESS,
    payload: data,
  };
};

export const postCountAction = () => {
  return {
    type: Types.CAFE_LIST_COUNT,
  };
};
export const postCountResetAction = () => {
  return {
    type: Types.CAFE_LIST_COUNT_RESET,
  };
};

export const postCategoryAction = (category) => {
  return {
    type: Types.CAFE_LIST_CATEGORY,
    category,
  };
};

//thunk

export const getCafeInfoRequest = () => {
  return {
    type: Types.GET_CAFE_INFO_REQUEST,
  };
};

export const getCafeInfoSuccess = (data) => {
  return {
    type: Types.GET_CAFE_INFO_SUCCESS,
    payload: data,
  };
};

export const getCafeInfoFailure = (error) => {
  return {
    type: Types.GET_CAFE_INFO_FAILURE,
    payload: error,
  };
};

export const addlike = (data) => {
  return {
    type: Types.ADD_LIKE,
    payload: data,
  };
};
export const hashTagAction = (data) => {
  return {
    type: Types.ADD_HASH,
    payload: data,
  };
};

export const getCafeInfo = (id, isLogin) => {
  return (dispatch) => {
    dispatch(getCafeInfoRequest());
    axios
      .get(`http://localhost:8080/posts/cafe-info/${id}/${isLogin}`, {
        withCredentials: true,
      })
      .then((res) => {
        const data = res.data.data;
        dispatch(getCafeInfoSuccess(data));
      })
      .catch((error) => {
        console.log(error);
        // dispatch(getCafeInfoFailure(error.message));
        alert("세션이 만료되었습니다. 다시 로그인해주세요.");
        dispatch(login(false));
        dispatch(showModal(false));
        dispatch(loginUserInfo(null));
        dispatch(postCountResetAction());
        const navigate = useNavigate();
        navigate("/");
      });
  };
};

export const getLikeCount = (id, isLogin) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/posts/cafe-info/${id}/${isLogin}`, {
        withCredentials: true,
      })
      .then((res) => {
        const data = res.data.data;
        dispatch(addlike(data));
      });
  };
};

export const getHashTags = (id, isLogin) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/posts/cafe-info/${id}/${isLogin}`, {
        withCredentials: true,
      })
      .then((res) => {
        const data = res.data.data;
        dispatch(hashTagAction(data));
      });
  };
};
