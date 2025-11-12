import { NavLink } from 'react-router-dom';

function OnlineToolsNavItem() {
  return (
    <li className="nav-item dropdown">
      <NavLink className="nav-link dropdown-toggle" to="/online-tools" id="navbarDropdownOnlineTools" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        在线工具
      </NavLink>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdownOnlineTools">
        <li><NavLink className="dropdown-item" to="/online-tools/sub1">子菜单1</NavLink></li>
        <li><NavLink className="dropdown-item" to="/online-tools/sub2">子菜单2</NavLink></li>
        {/* 更多子菜单项 */}
      </ul>
    </li>
  );
}

export default OnlineToolsNavItem;
