import "./Main.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareGithub,
  faSquareXing,
} from "@fortawesome/free-brands-svg-icons";
function Maincomponent() {
  return (
    <div className="main">
      <div>
        <h1>
          EL Mokhtar Diouani A Full Stack Web Developer
          <br />
          <span>Digital Career</span>
        </h1>
        <h3>
          I have successfully acquired proficient <br />
          web development skills through my training
          <br />
          with <span> DCI</span>
        </h3>
       {/* <Button href="tel:00 49 15217937286" className="main-btn">
          Call Now
        </Button>*/}
        
        
      </div>
    </div>
  );
}

export default Maincomponent;
