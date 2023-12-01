import React from "react";
import { Link } from "react-router-dom";

function ContactUs() {
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
        <Link to="/login" style={navLinkStyle}>
          Login
        </Link>
      </div>
      <section className="contact-section background">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-left">
              <h2>Contact Us</h2>
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Your Email" />
                </div>
              </form>
            </div>
            <div className="contact-right">
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Your Message"></textarea>
              </div>
              <button className="btn-primary">Send Message</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
