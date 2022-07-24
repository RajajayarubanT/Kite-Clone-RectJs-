
import UserProfile from '../../images/profile.jpg'
import Gift from '../../images/Gift_kite_banner_light.png'
import console from '../../images/console.svg'
import Anker from '../../images/icons/anker.svg'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Header from '../header/header';
import WatchList from '../WatchList/WatchList';

const Dashboard = () => {
  return (
    <div className="dashboard-main-container">
      <Header />
      <div className="dashboard-main-content">
        <div className="container-left">
          <WatchList />
        </div>
        <div className="container-right">
          <div className="dashboard-user-welcome">Hi, Thiruppathi</div>
          <div className="dashboard-equity-sections">
            <div className="dashboard-equity-section-1">
              <div className="dashboard-equity-section-header">
                <span className="icon icon-pie-chart"></span>
                <span>Equity</span>
              </div>
              <div className="dashboard-equity-section-margin-available">
                <span className='dash-equity-margin-available' data-balloon="₹212.40" data-balloon-pos="up">212.4</span>
                <span className='dash-equity-margin-label'>Margin available</span>
              </div>
            </div>
            <div className="dashboard-equity-section-2">
              <div className="dash-margin-used">Margins used <span id="dash-marginUsed-value">0</span></div>
              <div className="dash-Opening-balance">Opening balance <span id="dash-openBalance-value">212.4</span></div>
              <div className="dash-view-statement"><img src={console} alt="console" /> View statement</div>
            </div>
            <div className="dashboard-equity-section-3">
              <div className="dashboard-equity-section-header">
                <span className="icon icon-droplet"></span>
                <span> Commodity</span>
              </div>
              <div className="dash-section-commodity-margin">
                <span className="dash-commodity-value">0</span>
                <span className="dash-commodity-label">Margin available</span>
              </div>
              <div className="dash-commodity-section-blocked">
                <img src={Anker} alt="" />
                <p>You don't have a commodity account</p>
                <div className="dash-commodity-activate-btn">Activate</div>
              </div>
            </div>
          </div>
          <div className="dashboard-holdings-sections">
            <div className="dashboard-holdings-section-1">
              <div className="dashboard-holdings-section-header">
                <span className='icon icon-briefcase'></span>
                <span>Holdings <span className='dash-holding-length'>(2)</span> </span>
              </div>
              <div className="dashboard-holdings-section-available">
                <span className='dash-holdings-available price-down'>-897.45 <span className='dash-holding-percMove'>-63.30%</span></span>
                <span className='dash-holdings-label'>P&L</span>
              </div>
            </div>
            <div className="dashboard-equity-section-2">
              <div className="dash-margin-used">Current value <span id="dash-marginUsed-value">520.25</span></div>
              <div className="dash-Opening-balance">Investment <span id="dash-openBalance-value">1.42k</span></div>
            </div>
            <div className="dashboard-equity-section-1">
              <img src={Gift} alt="" />
            </div>
            <div className="dashboard-holding-statusbar">
              <div className="dashboard-holding-statusbar-items">
                <div className='dash-holding-script-1'></div>
                <div className='dash-holding-script-2'></div>
              </div>
              <div className="dashboard-holding-filters">
                <div className="dashboard-holding-filter-item">
                  <input type="radio" checked/>
                  <label>Current value</label>
                </div>
                <div className="dashboard-holding-filter-item">
                  <input type="radio" />
                  <label>Investment value</label>
                </div>
                <div className="dashboard-holding-filter-item">
                  <input type="radio" />
                  <label>P&L</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Dashboard;

