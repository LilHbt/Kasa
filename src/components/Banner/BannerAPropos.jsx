import "./banner.scss";
import bannerAPropos from "../../assets/banner-a-propos.png";

const BannerAPropos = () => {
  return (
    <div className="banner-aPropos">
      <img
        src={bannerAPropos}
        alt="banniere Kasa"
        className="banner-aPropos--img"
      />
    </div>
  );
};
export default BannerAPropos;
