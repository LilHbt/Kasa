//import data from '../../datas/data.json'
import { Link } from "react-router-dom";
import "./card.scss";

const Card = (props) => {
  const { card } = props;
  return (
    <Link to={`/ficheLogement/${card.id}`} className="link">
      <article
        className="card"
        style={{ backgroundImage: `url(${card.cover})` }}
      >
        <p className="card--text">{card.title}</p>
      </article>
    </Link>
  );
};
export default Card;
