import "./banner.scss";
import bannerAPropos from "../../assets/banner-a-propos.png";

const BannerAPropos = () => {
  return (
    <div className="banner">
      <img src={bannerAPropos} alt="banniere Kasa" className="banner--img" />
    </div>
  );
};
export default BannerAPropos;
