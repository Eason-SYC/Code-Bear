import { Link } from 'react-router-dom';

function OnlineToolsNavItem() {
  return (
    <li className="nav-item">
      <Link className="nav-link" to="/online-tools">
        在线工具
      </Link>
    </li>
  );
}

export default OnlineToolsNavItem;
