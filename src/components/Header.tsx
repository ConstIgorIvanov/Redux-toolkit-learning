import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className="header">
      <NavLink to="/Redux-toolkit-learning/state" className="navlink">
        Redux Toolkit State
      </NavLink>
      <NavLink to="Redux-toolkit-learning/todo" className="navlink">
        Redux Toolkit Todo
      </NavLink>
      <NavLink to="Redux-toolkit-learning/thunk" className="navlink">
        Redux Toolkit Async Thunk
      </NavLink>
    </div>
  );
};

export default Header;
