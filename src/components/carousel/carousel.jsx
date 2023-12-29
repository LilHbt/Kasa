import React from "react";
import arrowLeft from "../../assets/arrow_left.png";
import arrowRight from "../../assets/arrow_right.png";
import "./carousel.scss";

function Carousel(props) {
  //const { data } = props;
  //const pictures = data.pictures
  let i = 0;

  return (
    <div className="carousel">
      <img
        src={arrowLeft}
        alt="fleche gauche"
        className="arrow arrow-left"
        onClick={() => {
          i = i - 1;
          if (i < 0) {
            i = 5;
          }
          console.log(i);
        }}
      />
      <img
        src={arrowRight}
        alt="fleche gauche"
        className="arrow arrow-right"
        onClick={() => {
          i = i + 1;
          if (i > 5) {
            i = 0;
          }
          console.log(i);
        }}
      />
      <img src="" alt="location" className="carousel--img" />
    </div>
  );
}

export default Carousel;
