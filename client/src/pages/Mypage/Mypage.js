import React from 'react';
import { MypageSection} from '../../components';
import { mypageObjOne } from './Data';

function Mypage({loginInfo}) {
  // console.log('MyPage LoginInfo', loginInfo);
  return (
    <>
      <MypageSection loginInfo={loginInfo} {...mypageObjOne} />
    </>
  );
}

export default Mypage;