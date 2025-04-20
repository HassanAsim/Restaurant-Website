import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>123 Restaurant Street</p>
          <p>Chicago, IL 60601</p>
          <p>Tel: (123) 456-7890</p>
          <p>Email: info@littlelemon.com</p>
        </div>
        <div className="social-links">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2025 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;