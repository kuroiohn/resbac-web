// import { Link } from 'react-router-dom';
// import { FiHome, FiMapPin, FiUsers, FiSettings, FiLayers, FiTool } from 'react-icons/fi';
import "./SideBar.css";
import { NavLink, useNavigate } from "react-router-dom";

// imports kasi pngs ang icon natin xd
import homeIcon from "../../../assets/home.png";
import homeIconWhite from "../../../assets/home-white.png";
import teamIcon from "../../../assets/team.png";
import teamIconWhite from "../../../assets/team-white.png";
import vulnerableIcon from "../../../assets/vulnerable.png";
import vulnerableIconWhite from "../../../assets/vulnerable-white.png";
import alertsIcon from "../../../assets/alerts.png";
import alertsIconWhite from "../../../assets/alerts-white.png";
import formsIcon from "../../../assets/forms.png";
import formsIconWhite from "../../../assets/forms-white.png";
import accountIcon from "../../../assets/account.png";
import accountIconWhite from "../../../assets/account-white.png";
import folderIcon from "../../../assets/folder.png";
import folderIconWhite from "../../../assets/folder-white.png";
import resbacLogo from "../../../assets/RESBACLogo.png";

const navItems = [
  { label: "Home", path: "/home", icon: homeIcon, activeIcon: homeIconWhite },
  {
    label: "Rescue Teams",
    path: "/rescue-teams",
    icon: teamIcon,
    activeIcon: teamIconWhite,
  },
  {
    label: "Vulnerables",
    path: "/vulnerables",
    icon: vulnerableIcon,
    activeIcon: vulnerableIconWhite,
  },
  {
    label: "Alerts",
    path: "/alerts",
    icon: alertsIcon,
    activeIcon: alertsIconWhite,
  },
  {
    label: "Manual Request",
    path: "/manual",
    icon: formsIcon,
    activeIcon: formsIconWhite,
  },
  {
    label: "Account",
    path: "/account",
    icon: accountIcon,
    activeIcon: accountIconWhite,
  },
  {
    label: "Manage Points",
    path: "/points",
    icon: folderIcon,
    activeIcon: folderIconWhite,
  },
];

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // clear auth tokens/session if needed
    localStorage.clear();
    sessionStorage.clear();

    // redirect to login page
    navigate("/login");
  };
  return (
    <aside className='sidebar'>
      {/* Header */}
      <div className='sidebar-header'>
        <img src={resbacLogo} alt='RESBAC Logo' className='resbac-logo' />
        <span className='resbac-text'>RESBAC</span>
      </div>
      {/* NavBar Content */}
      <nav className='sidebar-nav'>
        {navItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.label}
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? item.activeIcon : item.icon}
                  alt={item.label}
                  className='icon'
                />
                <span>{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Logout Btn */}
      <div className='sidebar-footer'>
        <button className='logout-btn' onClick={handleLogout}>
          Logout
        </button>
      </div>
    </aside>
  );
}
