import { NavLink } from "react-router-dom"

const Header = () =>{
    return (
      <div className="header">
        <NavLink to="/react-gh-pages" className="navlink">
          Redux Toolkit State
        </NavLink>
        <NavLink to="react-gh-pages/todo" className="navlink">
          Redux Toolkit Todo
        </NavLink>
        <NavLink to="react-gh-pages/thunk" className="navlink">
          Redux Toolkit Async Thunk
        </NavLink>
      </div>
    );
}

export default Header;