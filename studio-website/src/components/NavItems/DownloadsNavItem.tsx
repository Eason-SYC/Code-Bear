import { NavLink } from 'react-router-dom';

function DownloadsNavItem() {
  return (
    <li className="nav-item dropdown">
      <NavLink className="nav-link dropdown-toggle" to="/downloads" id="navbarDropdownDownloads" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        资料下载
      </NavLink>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdownDownloads">
        <li><NavLink className="dropdown-item" to="/downloads/sub1">子菜单1</NavLink></li>
        <li><NavLink className="dropdown-item" to="/downloads/sub2">子菜单2</NavLink></li>
        {/* 更多子菜单项 */}
      </ul>
    </li>
  );
}

export default DownloadsNavItem;
