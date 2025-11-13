import { Link } from 'react-router-dom';

function DownloadsNavItem() {
  return (
    <li className="nav-item">
      <Link className="nav-link" to="/downloads">
        资料下载
      </Link>
    </li>
  );
}

export default DownloadsNavItem;
