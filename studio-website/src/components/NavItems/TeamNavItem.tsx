import { Link } from 'react-router-dom';

// This component was repurposed from TeamNavItem to SupportNavItem
function TeamNavItem() {
  return (
    <li className="nav-item">
      <Link className="nav-link" to="/support">
        技术支持
      </Link>
    </li>
  );
}

export default TeamNavItem;
