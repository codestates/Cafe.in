import React from "react";
import { useParams } from "react-router-dom";
import { dummyData } from "../../components/MainListSection/MainListDummyData";

const CafeInfo = () => {

  const { id } = useParams();
  const search = (num) => dummyData.find(
    key => key.id === num
  );
  const cafe = search(Number(id));
  
  return (
    <>
    <img src={cafe.title_img} alt="image" />
      <h2>This is CafeInfo Page </h2>
      <h1>id: {`${id}`}</h1>
      <h1>{`${cafe.title}`}</h1>
    </>
  );
}

export default CafeInfo;