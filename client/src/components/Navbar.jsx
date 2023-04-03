import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { valt } from "../redux/userSlice";

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const rendeles = localStorage.getItem("rendeles");

  const userValue = useSelector((state) => state.user.userValue);

  console.log(userValue);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("portfolio");
    localStorage.removeItem("rendeles");
    dispatch(valt());
    navigate("/Belepes");
  };

  return (
    <div className="Navbar">
      <div className="wrapper">
        <div className="right">
          <Link to="/" className="logo">
            AssistedPro
          </Link>
        </div>
        <div className="left">
          <Link to="/">Home</Link>
          <Link to="/Kotveny">Kötvény</Link>
          <Link to="/Reszveny">Részvény</Link>
          <Link to="/Kripto">Kripto</Link>
          {isLoggedIn ? (
            <>
              <Link to="/Portfolio">Portfoliók</Link>
              <p className="igen">|</p>
              <Link to="/Rendeles">Rendelések</Link>
              <p className="igen">|</p>
              <button onClick={handleLogout} style={{ fontSize: "16px" }}>
                Kilépés
              </button>
            </>
          ) : (
            <>
              <Link to="/Belepes">Belépés</Link>
              <p className="igen">|</p>
              <Link to="/Regis">Regisztráció</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
