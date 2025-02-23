import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import store from "../redux/store";

const Header = () => {
  const { isLoading, eror, flights } = useSelector((store) => store.flight);
  return (
    <header>
      <Link to="/" className="logo">
        <img src="/logo.webp" alt="logo" width={40} />
        <h2>Uçuş Radarı</h2>
      </Link>
      <div className="buttons">
        <NavLink to="/">
          <button>Harita</button>
        </NavLink>
        <NavLink to="/list">
          <button>Liste</button>
        </NavLink>
      </div>
      <h3>
        {isLoading
          ? "Uçuşlar Aranıyor.."
          : eror
          ? eror
          : `${flights.length} Uçuş Bulundu`}
      </h3>
    </header>
  );
};

export default Header;
