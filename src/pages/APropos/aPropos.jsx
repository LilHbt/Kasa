import BannerAPropos from "../../components/Banner/BannerAPropos";
import { aProposData } from "./data";
import Dropdown from "../../components/Dropdown/dropdown";

const APropos = () => {
  return (
    <div>
      <BannerAPropos />
      {aProposData.map((data) => (
        <Dropdown key={data.id} data={data} type="string" />
      ))}
    </div>
  );
};
export default APropos;
