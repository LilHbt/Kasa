import "./banner.scss";
import banner from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="banner">
      <img src={banner} alt="banniere Kasa" className="banner--img" />
      <p className="banner--text ">Chez vous, partout et ailleurs</p>
      <div className="banner--opacity"></div>
    </div>
  );
};
export default Banner;
