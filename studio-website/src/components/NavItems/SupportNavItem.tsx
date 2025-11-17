import { Link } from 'react-router-dom';

function SupportNavItem() {
  return (
    <li className="nav-item">
      <Link className="nav-link" to="/support">
        支持与定制
      </Link>
    </li>
  );
}

export default SupportNavItem;
