import "./gallery.scss";
import Card from "../Cards/Card";
import data from "../../datas/data.json";

const Galery = () => {
  return (
    <div className="gallery">
      {data.map((item) => (
        <Card key={item.id} card={item} />
      ))}
    </div>
  );
};
export default Galery;
