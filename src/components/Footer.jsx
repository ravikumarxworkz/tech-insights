import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>
              About Tech<span className="highlight">Insights</span>
            </h3>
            <p>
              A dedicated platform for developers to master Java, Python, .NET,
              and DSA. Built to simplify complex concepts.
            </p>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <Link to="/">
                <span>Home</span>
              </Link>
              <li>
                <Link to="/topic/java"><span>java</span></Link>
              </li>
              <li>
                 <Link to="/topic/python"><span>Python Scripts</span></Link>
              </li>
              <li>
                 <Link to="/topic/dsa"><span>DSA Patterns</span></Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Info</h3>
            <div className="contact-details">
              <p>
                <FaEnvelope /> rkkumbar97@gmail.com
              </p>
              <p>📍 Bangalore, India</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Ravikumar Shankar Kumbar. All rights reserved.</p>
          <p class="text-muted">
            Made with ❤️ by
            <a
              class="link-primary"
              href="https://ravikumarxworkz.github.io/"
              target="_blank"
            >
              Ravikumar S Kumbar
            </a>
          </p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/ravikumar-kumbar/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ravikumarxworkz"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/BONDRAVI20"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.youtube.com/@Tech_In_JavaFullStack"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
