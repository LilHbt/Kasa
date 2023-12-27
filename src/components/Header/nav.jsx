import { Link } from "react-router-dom";
import "./nav.scss";
const Nav = () => {
  return (
    <div>
      <nav>
        <Link to="/" className="nav--link">
          Accueil
        </Link>
        <Link to="/aPropos" className="nav--link">
          À propos
        </Link>
      </nav>
    </div>
  );
};
export default Nav;
