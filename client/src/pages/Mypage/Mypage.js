import React from 'react';
import { MypageSection} from '../../components';
import { mypageObjOne } from './MypageData';

const Mypage = ({loginInfo, setIsLogin}) => {
  console.log(loginInfo);
  return (
    <>
      <MypageSection loginInfo={loginInfo} setIsLogin={setIsLogin} mypageObjOne={mypageObjOne} />
    </>
  );
}

export default Mypage;