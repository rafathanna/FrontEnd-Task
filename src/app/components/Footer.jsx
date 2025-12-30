"use client";
import '../Ui/ui.css'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <img src="/img/logo.png" alt="Logo" className="f-logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <p>📞 +20 123 456 789</p>
          <p>✉️ mail@example.com</p>
        </div>

        <div className="footer-links">
          <h4>Information</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <div className="news-input">
            <input type="text" placeholder="Email Address" />
            <button>send</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
