import React from "react";
import arrowLeft from "../../assets/arrow_left.png";
import arrowRight from "../../assets/arrow_right.png";
import "./carousel.scss";

function Carousel(props) {
  //const { data } = props;
  
  
  return (
    <div className="carousel">
      <img src={arrowLeft} alt="fleche gauche" className="arrow arrow-left"  onClick={()=>{ 
      
      }}/>
      <img src={arrowRight} alt="fleche gauche" className="arrow arrow-right" onClick={()=>{ 
      
      }}/>
      <img src="" alt="location" className="carousel--img" />
    </div>
  );
}

export default Carousel;
