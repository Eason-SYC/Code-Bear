import { NavLink } from 'react-router-dom';

function ProjectsNavItem() {
  return (
    <li className="nav-item dropdown">
      <NavLink className="nav-link dropdown-toggle" to="/projects" id="navbarDropdownProjects" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        项目介绍
      </NavLink>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdownProjects">
        <li><NavLink className="dropdown-item" to="/projects/sub1">子菜单1</NavLink></li>
        <li><NavLink className="dropdown-item" to="/projects/sub2">子菜单2</NavLink></li>
        {/* 更多子菜单项 */}
      </ul>
    </li>
  );
}

export default ProjectsNavItem;
