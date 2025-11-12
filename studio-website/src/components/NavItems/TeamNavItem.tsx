import { NavLink } from 'react-router-dom';

function TeamNavItem() {
  return (
    <li className="nav-item dropdown">
      <NavLink className="nav-link dropdown-toggle" to="/team" id="navbarDropdownTeam" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        团队介绍
      </NavLink>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdownTeam">
        <li><NavLink className="dropdown-item" to="/team/sub1">子菜单1</NavLink></li>
        <li><NavLink className="dropdown-item" to="/team/sub2">子菜单2</NavLink></li>
        {/* 更多子菜单项 */}
      </ul>
    </li>
  );
}

export default TeamNavItem;
