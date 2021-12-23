import React from 'react';
import { dummyData } from './Data';
import { MainSection } from '../../components';

function MainPage() {

  if(dummyData.length !== 0){
  return (
    <>
      <MainSection />
    </>
  );
}}

export default MainPage;
