import { NavLink } from 'react-router-dom';
import './Navbar.css';
import DownloadsNavItem from './NavItems/DownloadsNavItem';
import OnlineToolsNavItem from './NavItems/OnlineToolsNavItem';
import ProjectsNavItem from './NavItems/ProjectsNavItem';
import TeamNavItem from './NavItems/TeamNavItem';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src="/bear.jpg" alt="源码熊电子工作室 Logo" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdownHome" role="button" data-bs-toggle="dropdown" aria-expanded="false" end>
                首页
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownHome">
                <li><NavLink className="dropdown-item" to="/home/sub1">子菜单1</NavLink></li>
                <li><NavLink className="dropdown-item" to="/home/sub2">子菜单2</NavLink></li>
                {/* 更多子菜单项 */}
              </ul>
            </li>
            <DownloadsNavItem />
            <OnlineToolsNavItem />
            <ProjectsNavItem />
            <TeamNavItem />
            {/* Add more links as needed */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownBuy" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                购买
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownBuy">
                <li><a className="dropdown-item" href="https://shop.taobao.com" target="_blank" rel="noopener noreferrer">淘宝店铺</a></li>
                <li><NavLink className="dropdown-item" to="/buy/custom">定制服务</NavLink></li>
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
