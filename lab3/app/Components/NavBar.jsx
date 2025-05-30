import "../styles/navigation.css";
import "../styles/general.css";
import { useNavigate } from "react-router-dom";
import { login, logout, useUser } from "../Services/UserService";
export default function NavBar() {
  const navigate = useNavigate();
  const user = useUser();

  function handleLogin() {
    if (!user) {
      login(navigate);
    } else {
      logout();
    }
  }

  return (
    <header className="header">
      <a href="#">
        <img
          className="logo"
          alt="the hoppy library logo"
          src="/logos/logo.png"
        />
      </a>
      <nav>
        <ul className="main-nav-list">
          <li>
            <a href="#" className="main-nav-link">
              Section 1
            </a>
          </li>
          <li>
            <a href="#" className="main-nav-link">
              Section 2
            </a>
          </li>
          <li>
            <a href="#" className="main-nav-link">
              Section 3
            </a>
          </li>
          <li>
            <a href="#" className="main-nav-link">
              Section 4
            </a>
          </li>
        </ul>
      </nav>
      <div className="nav-container--btn">
        <button className="btn btn--header">Cart</button>
        <button className="btn btn--header" onClick={handleLogin}>
          {`${user ? "LOGOUT" : "LOGIN"}`}
        </button>
      </div>
    </header>
  );
}
