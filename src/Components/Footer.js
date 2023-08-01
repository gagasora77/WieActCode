import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab);
library.add(fas);

function Footer() {
  return (
    <div className="footer">
      <div className="column">
        <p className="footer-title">Social Media</p>
        <div className="footer-facebook">
          <a href="https://www.facebook.com/Women-In-Engineering-Annual-Congress-of-Tunisia-WIE-ACT-101387632701735/">
            <FontAwesomeIcon
              icon="fa-brands fa-square-facebook"
              className="footer-icon1"
            />
          </a>
          <p className="footer-text">Our Facebook page</p>
        </div>
        <div className="footer-instagram">
          <a href="https://www.instagram.com/wie.act/">
            <FontAwesomeIcon
              icon="fa-brands fa-square-instagram"
              className="footer-icon1"
            />
          </a>
          <p className="footer-text">Our Instagram page</p>
        </div>
      </div>
      <div className="column">
        <p className="footer-title-center">Hosted By</p>
        <img
          src={require("../Assets/WIE ENET'Com.png")}
          className="footer-logo1"
        />
        <img
          src={require("../Assets/WIE ENIS Logo.png")}
          className="footer-logo2"
        />
      </div>
      <div className="column">
        <p className="footer-title">Contacts</p>
        <div className="footer-phone">
          <FontAwesomeIcon
            icon="fa-solid fa-square-phone"
            className="footer-icon2"
          />
          <p className="footer-text">+216 25 423 270</p>
        </div>
        <div className="footer-mail">
          <FontAwesomeIcon
            icon="fa-solid fa-square-envelope"
            className="footer-icon2"
          />
          <p className="footer-text">wie.act@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
