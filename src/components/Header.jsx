import { Link, NavLink } from "react-router-dom";

const Header = () => {
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
      <h4>300 uçuş bulundu</h4>
    </header>
  );
};

export default Header;
