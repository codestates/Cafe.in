import React from 'react';
import { MypageSection} from '../../components';
import { mypageObjOne } from './Data';

function Mypage() {
  return (
    <>
      <MypageSection {...mypageObjOne} />
    </>
  );
}

export default Mypage;