import "./Footer.css";
import { Button, NavLink } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faXing,
} from "@fortawesome/free-brands-svg-icons";

function Footercomponent() {
  return (
    <div className="footer">
      <p>
        Copyrights© <span>Soumya Patil</span>
      </p>
      <div class="social-icons">
        <NavLink href="https://github.com/soumyapatil07" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            style={{
              fontSize: "2rem",
            }}
          />
        </NavLink>
        <NavLink
          href="https://www.linkedin.com/in/soumya-odugoudar/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            style={{
              fontSize: "2rem",
            }}
          />
        </NavLink>
        
      </div>
    </div>
  );
}

export default Footercomponent;
