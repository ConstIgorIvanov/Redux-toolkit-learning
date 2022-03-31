import { NavLink } from "react-router-dom"

const Header = () =>{
    return (
      <div className="header">
        <NavLink to="/state" className="navlink">
          Redux Toolkit State
        </NavLink>
        <NavLink to="/todo" className="navlink">
          Redux Toolkit Todo
        </NavLink>
        <NavLink to="/thunk" className="navlink">
          Redux Toolkit Async Thunk
        </NavLink>
      </div>
    );
}

export default Header;