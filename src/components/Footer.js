import React from 'react';

function Footer() {
  return (
    <footer role="contentinfo">
      <div className="footer-content">
        <div className="contact-info">
          <h3 id="contact-heading">Contact Us</h3>
          <address aria-labelledby="contact-heading">
            <p>123 Restaurant Street</p>
            <p>Chicago, IL 60601</p>
            <p>Tel: <a href="tel:+11234567890" aria-label="Call us at (123) 456-7890">(123) 456-7890</a></p>
            <p>Email: <a href="mailto:info@littlelemon.com" aria-label="Email us at info@littlelemon.com">info@littlelemon.com</a></p>
          </address>
        </div>
        <div className="social-links">
          <h3 id="social-heading">Follow Us</h3>
          <ul aria-labelledby="social-heading">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page (opens in new tab)">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page (opens in new tab)">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page (opens in new tab)">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright" role="contentinfo" aria-label="Copyright information">
        <p>&copy; 2025 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;