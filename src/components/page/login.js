import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../page/login.css';
import '../page/responsive.css'; // Import responsive styles
import poto from '../img/bg.jpg';
import logoCF from '../img/CF.png';
import { Link } from 'react-router-dom';

function LoginPage() {
  const containerStyle = {
    backgroundColor: '#E1EAF2',
    position: 'relative',
    width: '100%',
    height: '100vh',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#ABC1E2',
  };

  const navLinkStyle = {
    color: '#000000',
    fontSize: '25px',
    lineHeight: '70px',
    textDecoration: 'none',
    padding: '0 20px',
  };

  return (
    <div style={containerStyle}>
      <div style={navStyle}>
        <Link to="/" style={navLinkStyle}>
          Home
        </Link>
        <Link to="/order" style={navLinkStyle}>
          Order
        </Link>
        <Link to="/blog" style={navLinkStyle}>
          Blog
        </Link>
      </div>
      <div className="login-page">
        <div className="logo-container">
          <img src={logoCF} alt="CF Logo" className="cf-logo" />
        </div>
        <div className="frme1">
          <div className="row gx-5">
            <div className="col-md-6">
              <img src={poto} className="loginpoto" />
            </div>
          </div>
        </div>
        <div className="frame2">
          <div className="row gx-5">
            <div className="col-md-6">
              <div className="login-form-wrap">
                <div className="login-header">
                  <h3>WELCOME!!</h3>
                  <h4>Login To Your Account</h4>
                </div>
                {/* form */}
                <div className="login-form">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          id="text"
                          name="fname"
                          type="text"
                          placeholder="Username or Email"
                          required=""
                          fdprocessedid="u37exr"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          id="text"
                          name="fname"
                          type="text"
                          placeholder="Password"
                          required=""
                          fdprocessedid="u37exr"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-6 text-end mb-20">
                      <a href="#" class="link style1">
                        Forgot Password?
                      </a>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group">
                        <Link to="/order" className="btn style1 w-100 d-block" fdprocessedid="rtahbg">
                          Login
                        </Link>
                      </div>
                    </div>
                    <div class="col-md-12 text-center">
                      <p class="mb-0">
                        Don't have an Account? <a class="link to" href="./reg">Create One</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
