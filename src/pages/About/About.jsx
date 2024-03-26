import { aProposData } from "./data";
import Dropdown from "../../components/Dropdown/dropdown";
import BannerAbout from "../../components/Banner/BannerABout";

const About = () => {
  return (
    <div>
      <BannerAbout />
      {aProposData.map((data) => (
        <Dropdown key={data.id} data={data} type="string" title={data.title} />
      ))}
    </div>
  );
};
export default About;
