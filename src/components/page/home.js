import React from "react";
import logo from "../img/CF.png";
import icon from "../img/bg.jpg";
import { Link } from "react-router-dom";

function Home() {
  const containerStyle = {
    backgroundColor: "#E1EAF2",
    position: "relative",
    width: "100%",
    minHeight: "100vh",
  };

  const navStyle = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#ABC1E2",
  };

  const navLinkStyle = {
    color: "#000000",
    fontSize: "25px",
    lineHeight: "70px",
    textDecoration: "none",
    padding: "0 20px",
  };

  const logoStyle = {
    width: "500px",
    maxWidth: "100%",
    display: "flex",
    alignItems: "center",
  };

  const iconStyle = {
    width: "603px",
    height: "597px",
    borderRadius: "45px",
    margin: "50px 0",
    maxWidth: "100%",
  };

  const contentContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flexWrap: "wrap",
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
    maxWidth: "50%",
  };

  const titleStyle = {
    fontSize: "40px",
    marginBottom: "10px",
  };

  const subTitleStyle = {
    fontSize: "20px",
    marginBottom: "10px",
  };

  const buttonStyle = {
    fontSize: "24px",
    padding: "10px 20px",
    backgroundColor: "#0088cc",
    color: "#ffffff",
    borderRadius: "10px",
    textDecoration: "none",
  };

  const footerStyle = {
    backgroundColor: "#ABC1E2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70px",
  };

  const footerTextStyle = {
    fontSize: "18px",
    color: "#FFFFFF",
  };

  // Create media query for smaller screens
  const mediaQuery = `@media (max-width: 768px) {
    img {
      max-width: 80%; // Adjust the maximum width as needed
    }
  }`;

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
        <Link to="/login" style={navLinkStyle}>
          Login
        </Link>
      </div>

      <div style={contentContainerStyle}>
        <img src={icon} alt="icon" style={iconStyle} />
        <div style={contentStyle}>
          <h1 style={titleStyle}>WELCOME CLEAN FUN !</h1>
          <h1 style={titleStyle}></h1>
          <img src={logo} alt="logo" style={logoStyle} />
          <p style={subTitleStyle}>
            Clean Fun membantumu membersihkan setiap sudut rumahmu!!
          </p>
          <Link to="/order" style={buttonStyle}>
            SERVICE
          </Link>
          <Link to="/user" style={buttonStyle}>
           Riwayat
          </Link>
        </div>
      </div>

      <div style={footerStyle}>
        <p style={footerTextStyle}>
          &copy; {new Date().getFullYear()} CleanFun.
        </p>
      </div>

      {/* Place the <style> tag here */}
      <style>{mediaQuery}</style>
    </div>
  );
}

export default Home;
