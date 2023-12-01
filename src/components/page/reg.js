import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../page/reg.css';
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
          <Link to="/login" style={navLinkStyle}>
            Login
          </Link>
        </div>
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
                  <h3>SIGN UP</h3>
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
                          placeholder="Username"
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
                          placeholder="Email"
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
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          id="text"
                          name="fname"
                          type="text"
                          placeholder="Re-Password"
                          required=""
                          fdprocessedid="u37exr"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <Link to="/login">
                          <button className="btn style1 w-100 d-block" fdprocessedid="rtahbg">
                            SIGN UP
                          </button>
                        </Link>
                      </div>
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
