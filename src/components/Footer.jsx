
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3 className="footer-title">Recommended</h3>
        <ul className="footer-list">
          {[
            "realme C75",
            "realme 13+ 5G",
            "realme Note 60",
            "realme C61",
            "realme C65",
            "realme 12",
            "realme 12+ 5G",
          ].map((item, index) => (
            <li key={index} className="footer-item">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-section">
        <h3 className="footer-title">Support</h3>
        <ul className="footer-list">
          {["FAQ", "Troubleshooting"].map((item, index) => (
            <li key={index} className="footer-item">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-section">
        <h3 className="footer-title">About realme</h3>
        <ul className="footer-list">
          {["Our Brand", "Newsroom"].map((item, index) => (
            <li key={index} className="footer-item">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-section">
        <h3 className="footer-title">Contact realme</h3>
        <p className="footer-item">WhatsApp</p>
        <p className="footer-item">service.pk@realme.com</p>
        <p className="footer-item">04238048018</p>
        <p className="footer-item">09:30 - 18:00, MON - SAT</p>
        <p className="footer-item">Exclude Holidays</p>
      </div>
    </footer>
  );
};

export default Footer;
