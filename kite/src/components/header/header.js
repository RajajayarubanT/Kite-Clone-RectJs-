
import UserProfile from '../../images/profile.jpg';
import Logo from '../../images/icons/kite_logo.svg';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header-main-container">
      <div className="header-wrapper">
        <div className="header-left-panel">
          <div className="header-left-panel-item">
            <div className="header-pl-scriptSymbol">NIFTY 50</div>
            <div className="header-pl-scriptPrice">16661.40</div>
            <div className="header-pl-scriptPercMove">1.89 %</div>
          </div>
          <div className="header-left-panel-item">
            <div className="header-pl-scriptSymbol">SENSEX</div>
            <div className="header-pl-scriptPrice">55925.74</div>
            <div className="header-pl-scriptPercMove">1.90 %</div>
          </div>
        </div>
        <div className="header-right-panel">
          <div className="header-right-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="header-right-menus">
            <Link to={'/dashboard'}><span>Dashboard</span></Link>
            <Link to={'/orders'}><span>Orders</span></Link>
            <Link to={'/holdings'}><span>Holdings</span></Link>
            <Link to={'/positions'}><span>Positions</span></Link>
            <Link to={'/funds'}><span>Funds</span></Link>
            <Link to={'/apps'}><span>Apps</span></Link>
          </div>
          <div className="header-right-user">
            <img src={UserProfile} className="header-r-user-img" alt="" />
            <span className="header-r-user-userName">MXG256</span>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Header;

