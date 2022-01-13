import * as Types from "./types";

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

export const postCategoryAction = (category) => {
  return {
    type: Types.CAFE_LIST_CATEGORY,
    category,
  };
};
