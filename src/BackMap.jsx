import React, { useState } from 'react';
import body from "./assets/body1.png";
import "./App.css"

const BodyMap = () => {
  const [clickedPoints, setClickedPoints] = useState([]);

  const handleBodyClick = (e) => {
   
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
   

   
    setClickedPoints([...clickedPoints, { x, y }]);
  };

  return (
    <div>
      <img
        src= {body}// Your body map image or SVG
        alt="Body Map"
        onClick={handleBodyClick}
        style={{ position: 'relative' }}
      />
      {clickedPoints.map((point, index) => (
        <div
          key={index}
          className="red-circle"
          style={{ top: point.y, left: point.x }}
        >
           <span>{index+1}</span> 
        </div>
      ))}
    </div>
  );
};

export default BodyMap;
