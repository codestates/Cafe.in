import React from "react";
import { MenuGrid, MenuHeadings, MenuLinks } from "./Dropdown.elements";

const DropDownMenu = ({ regionData, currLoc, setCurrLoc }) => {

  // const allList = regionData.map((area) => {
  //   let city = Object.keys(area);
  //   let spot = area[city];
  //   return <><MenuHeadings>{city}</MenuHeadings><MenuLinks>{spot}</MenuLinks></>
  // })

  const handleSelect = (location) => {
    setCurrLoc(location);
  }

  const allList = regionData.map((data) => {
    if (data[0] === 0) {
      return <MenuHeadings key={data[2]}>{data[1]}</MenuHeadings>
    } else if (data[0] === 1) {
      return <MenuLinks key={data[2]} onClick={()=>handleSelect(data[1])}>{data[1]}</MenuLinks>
    }
  })


  return (
    <MenuGrid>
      {allList}
    </MenuGrid>
  );
};

export default DropDownMenu;
