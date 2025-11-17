// =============================================================================
// Navbar Component
//
// This component renders the main navigation bar.
//
// To modify the content of specific navigation items (e.g., "资料下载", "在线工具",
// "项目介绍", "团队介绍"), please edit their respective component files located in:
// `studio-website/src/components/NavItems/`
//
// For example:
// - To change "资料下载", edit `DownloadsNavItem.tsx`
// - To change "在线工具", edit `OnlineToolsNavItem.tsx`
// - To change "项目介绍", edit `ProjectsNavItem.tsx`
// - To change "团队介绍", edit `TeamNavItem.tsx`
// =============================================================================

import { Link } from 'react-router-dom';
import './Navbar.css';
import DownloadsNavItem from './NavItems/DownloadsNavItem';
import OnlineToolsNavItem from './NavItems/OnlineToolsNavItem';
import ProjectsNavItem from './NavItems/ProjectsNavItem';
import { images } from '../assets/images';
import TeamNavItem from './NavItems/TeamNavItem';
import SupportNavItem from './NavItems/SupportNavItem';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={images.bear} alt="源码熊电子工作室 Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                首页
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownBuy" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                购买
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownBuy">
                <li><a className="dropdown-item" href="https://shop381498461.taobao.com/" target="_blank" rel="noopener noreferrer">淘宝店铺</a></li>
                {/* 更多购买选项 */}
              </ul>
            </li>
            <DownloadsNavItem />
            <OnlineToolsNavItem />
            <ProjectsNavItem />
            <TeamNavItem />
            <SupportNavItem />
            {/* Add more links as needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
