import { Link } from 'react-router-dom';

function ProjectsNavItem() {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownProducts" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        产品介绍
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdownProducts">
        <li><Link className="dropdown-item" to="/products/boards">开发板</Link></li>
        <li><Link className="dropdown-item" to="/products/projects">开源项目</Link></li>
        <li><Link className="dropdown-item" to="/products/devtools">工具</Link></li>
        <li><Link className="dropdown-item" to="/products/others">其他</Link></li>
      </ul>
    </li>
  );
}

export default ProjectsNavItem;
