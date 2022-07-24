
import UserProfile from '../../images/profile.jpg'
import Apple_logo from '../../images/icons/apple.svg'
import Android_logo from '../../images/icons/android.svg'
import Zerodha_logo from '../../images/icons/zerodha_logo.svg'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

const Login = () => {
  return (
    <div className="login-main-container">
      <div className="login-inputs-container">
        <div className="login-user-profile">
          <img src={UserProfile} alt="profile" />
          <h2 className="login-user-username" id="login-user-username">MXG256</h2>
          <div className="login-changeUser" id="login-changeUser">Change user</div>
        </div>
        <div className="login-password-container">
          <div className="login-password-label">Password</div>
          <input type="password" id="login-user-password" placeholder="Password" />
        </div>
        <Link className="login-Button-container" to={'/dashboard'}><div id="login-Button">Login</div></Link>
        <div className="login-forget-password" id="login-forget-password">Forget user ID or password?</div>
      </div>
      <div className="login-footer-container">
        <div className="login-app-icons">
          <img src={Android_logo} alt="" />
          <img src={Apple_logo} alt="" />
        </div>
        <div className="login-fotter-logo">
          <img src={Zerodha_logo} alt="" />
        </div>
        <div className="login-footer-openAccount-container">Don't have an account? Signup now!</div>
        <p className="login-footer-terms">Zerodha Broking Limited: Member of NSE, BSE & CDSL – SEBI Reg. no.: INZ000031633, CDSL – SEBI Reg. no.: IN-DP-431-2019 | Zerodha Commodities Pvt. Ltd.: MCX Reg. no.: 46025</p>
        <div className="login-footer-version">v3.0.0</div>
      </div>
    </div>
  );
}


export default Login;

