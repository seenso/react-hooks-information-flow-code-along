import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor }) { //onChangeColor is the handleChangeColor function
  return <div 
      onClick={onChangeColor}
      className="child" 
      style={{ backgroundColor: "#FFF" }} 
    />;
}

export default Child;