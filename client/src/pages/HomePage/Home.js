import React from 'react';
import { homeObjOne, homeObjTwo } from './Data';
import { InfoSection, Pricing } from '../../components';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <Pricing />
      <InfoSection {...homeObjTwo} />
    </>
  );
}

export default Home;
