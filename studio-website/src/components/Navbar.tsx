import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/logo.svg" alt="源码熊电子工作室 Logo" height="30" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownHome" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                首页
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownHome">
                <li><Link className="dropdown-item" to="/home/sub1">子菜单1</Link></li>
                <li><Link className="dropdown-item" to="/home/sub2">子菜单2</Link></li>
                {/* 更多子菜单项 */}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/downloads" id="navbarDropdownDownloads" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                资料下载
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownDownloads">
                <li><Link className="dropdown-item" to="/downloads/sub1">子菜单1</Link></li>
                <li><Link className="dropdown-item" to="/downloads/sub2">子菜单2</Link></li>
                {/* 更多子菜单项 */}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/online-tools" id="navbarDropdownOnlineTools" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                在线工具
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownOnlineTools">
                <li><Link className="dropdown-item" to="/online-tools/sub1">子菜单1</Link></li>
                <li><Link className="dropdown-item" to="/online-tools/sub2">子菜单2</Link></li>
                {/* 更多子菜单项 */}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/projects" id="navbarDropdownProjects" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                项目介绍
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownProjects">
                <li><Link className="dropdown-item" to="/projects/sub1">子菜单1</Link></li>
                <li><Link className="dropdown-item" to="/projects/sub2">子菜单2</Link></li>
                {/* 更多子菜单项 */}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/team" id="navbarDropdownTeam" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                团队介绍
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownTeam">
                <li><Link className="dropdown-item" to="/team/sub1">子菜单1</Link></li>
                <li><Link className="dropdown-item" to="/team/sub2">子菜单2</Link></li>
                {/* 更多子菜单项 */}
              </ul>
            </li>
            {/* Add more links as needed */}
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownBuy" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                购买
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownBuy">
                <li><a className="dropdown-item" href="https://shop.taobao.com" target="_blank" rel="noopener noreferrer">淘宝店铺</a></li>
                <li><Link className="dropdown-item" to="/buy/custom">定制服务</Link></li>
                {/* 更多购买选项 */}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
