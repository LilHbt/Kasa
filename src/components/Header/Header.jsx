import "./Header.scss";
import logo from "../../assets/logo.png";
import Nav from "./nav";
const Header = () => {
  return (
    <div className="header">
      <img src={logo} className="header--logo" alt="logo Kasa" />
      <Nav />
    </div>
  );
};
export default Header;
