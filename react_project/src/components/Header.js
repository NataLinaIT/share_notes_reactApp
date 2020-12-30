import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="nav_wrapper">
      <nav className="container-fluid navbar navbar-dark bg-dark">
        <ul className="container navbar">
          <li className="logo">ShareNotes</li>
          <li>
            <NavLink exact className="" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="" to="/note">
              Search Note
            </NavLink>
          </li>
          <li>
            <NavLink className="" to="/create">
              Cteate Note
            </NavLink>
          </li>
          <li>
            <NavLink className="" to="/about">
              About App
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
