import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../page/dashboard.css'; 
import HomeImage from '../img/home.jpg';
import CleanFunImage from '../img/CF.png';
import CarpetImage from '../img/carpet.jpg';
import BathImage from '../img/bath.jpg';
import KitchenImage from '../img/kitchen.jpg';
import AlatImage from '../img/alat.png';

function BlogPage() {
  const containerStyle = {
    backgroundColor: "#E1EAF2",
    position: "relative",
    width: "100%",
    height: "100vh",
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
        </div>
      </div>
      <div className="SERVICE">
        <div className="div">
          <div className="overlap">
            <div className="frame">
              <img className="image" alt="Image" src={CleanFunImage} />
            </div>
            <div className="overlap-group">
              <div className="rectangle" />
              <div className="text-wrapper">HOME CLEANING!</div>
              <img className="img" alt="Img" src={AlatImage} />
              <img className="img-2" alt="Img" src={AlatImage} />
            </div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-2">ORDER NOW</div>
          </div>
          <div className="text-wrapper-3">HOME</div>
          <div className="overlap-group-2">
            <img className="cleanfun-removebg" alt="Cleanfun removebg" src={CleanFunImage} />
          </div>
          <img className="image-3" alt="Image" src={HomeImage} />
          <img className="image-4" alt="Image" src={CarpetImage} />
          <img className="image-5" alt="Image" src={BathImage} />
          <img className="image-6" alt="Image" src={KitchenImage} />
          <div className="text-wrapper-7">Room Cleaning</div>
          <div className="text-wrapper-8">Carpet Cleaning</div>
          <div className="text-wrapper-9">Bathroom Cleaning</div>
          <div className="text-wrapper-10">Kitchen Cleaning</div>
          <div className="text-wrapper-11">CATEGORY</div>
          <div className="overlap-2">
            <div className="text-wrapper-12">@cleanfun2023</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
