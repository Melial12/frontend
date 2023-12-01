import React from 'react';
import '../page/blog.css';
import '../img/alat.png'; 
import { Link } from "react-router-dom";// Ganti dengan nama berkas CSS yang sesuai

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
    <div className="blog">
      {/* Frame 2 */}
      <div className="frame-2"></div>

      {/* Image 1 */}
      <div className="image-1"></div>

      

      {/* CONTACT US */}
      <div className="contact-us">CONTACT US</div>


      {/* Rectangle 20 */}
      <div className="rectangle-20"></div>

      {/* Rectangle 22 */}
      <div className="rectangle-22"></div>

      {/* Rectangle 21 */}
      <div className="rectangle-21"></div>


      {/* CleanFun-removebg-preview 3 */}
      <div className="clean-fun-removebg-preview-3"></div>

      {/* Image 10 */}
      <div className="image-10"></div>

      {/* ABOUT US!! */}
      <div className="about-us">ABOUT US!!</div>

      {/* d87219349aaa2d5536bd6ec78b6091b4-removebg-preview 3 */}
      <div className="d87219349aaa2d5536bd6ec78b6091b4-removebg-preview-3"></div>

      {/* d87219349aaa2d5536bd6ec78b6091b4-removebg-preview 4 */}
      <div className="d87219349aaa2d5536bd6ec78b6091b4-removebg-preview-4"></div>

      {/* Deskripsi Blog */}
      <p className="blog-description">
        Menjadi Pasangan Anda dalam Menjaga Kebersihan. Di Clean Fun, kami adalah tim profesional yang berkomitmen untuk memberikan layanan pembersihan terbaik bagi rumah dan bisnis Anda. Kami percaya bahwa kebersihan adalah kunci untuk kesehatan dan kenyamanan, dan kami berdedikasi untuk membuat lingkungan Anda selalu bersih dan rapi. Dalam perjalanan kami, misi utama kami adalah menyediakan pelayanan pembersihan yang tidak hanya memenuhi ekspektasi, tetapi juga melampaui harapan. Kami menjalani setiap tugas dengan ketelitian, kepedulian, dan kualitas yang tak tertandingi.
      </p>

      {/* @cleanfun2023 */}
      <div className="clean-fun-2023">@cleanfun2023</div>
    </div>
    </div>
  );
}

export default BlogPage;
