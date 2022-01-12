import * as Types from './types';

export const clickModalType = (clickedMenu = '') => {
  return {
    type: Types.CLICK_MODAL_TYPE,
    payload: clickedMenu,
  }
}

export const login = (isLogin = false) => {
  return {
    type: Types.LOGIN,
    payload: isLogin,
  }
}