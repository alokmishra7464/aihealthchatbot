import React from 'react'
import "./Contact.css"
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact">
      <div className="contact">
        <div className="contact-content">
          <div className="contact-left">
            <h3>Contact Us</h3>

            <p>
              Phone: 999999999 <br />
              Email- medimate@gmail.com <br />
            </p>
          </div>
          <div className="contact-right">
            <h3>Follow Us</h3>
            <ul className="social-links">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
