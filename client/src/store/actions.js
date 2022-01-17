import * as Types from "./types";
import axios from 'axios';

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
        .catch(error => {
          dispatch(getCafeInfoFailure(error.message));
        })
  }
}