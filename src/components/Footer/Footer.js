import React, { forwardRef } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Footer = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="footer_parent_div">
      <div className="footer_grit_div">
        <div className="footer_cart">
          <h3>QuickvanUK</h3>
          <div className="footer_quick_contact_div">
            <p>📞 Phone: +44 XXXXXXXXXX</p>
            <p>📧 Email: support@quickvanuk.com</p>
            <p>🏢 Office: London, UK</p>
            <p>🕒 Hours: Mon-Sat: 8 AM - 8 PM | Sun: 10 AM - 5 PM</p>
          </div>
        </div>
        <div className="footer_three_cart_parent_div">
          <div>
            <h5>Comany</h5>
            <p>
              <Link to="#">News</Link>
            </p>
            <p>
              <Link to="#">Career</Link>
            </p>
            <p>
              <Link to="#">Business</Link>
            </p>
            <p>
              <Link to="#">Sustainabillity</Link>
            </p>
          </div>
          <div>
            <h5>Useful Links</h5>
            <p>
              <Link to="#">Media</Link>
            </p>
            <p>
              <Link to="#">Sponsorship</Link>
            </p>
            <p>
              <Link to="#">Contact</Link>
            </p>
            <p>
              <Link to="#">Sitemap</Link>
            </p>
          </div>
          <div>
            <h5>Legal</h5>
            <p>
              <Link to="#">Cookie Policy</Link>
            </p>
            <p>
              <Link to="#">Data Privacy</Link>
            </p>
            <p>
              <Link to="#">Exclusion of Liabillty</Link>
            </p>
            <p>
              <Link to="#">Imprint</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="footer_down_main_parent_div">
        <div className="blank_div"></div>
        <div className="footer_down_part_div">
          <div>
            <small>© QuickvanUK. All rights reserved.</small>
          </div>
          <div className="footer_logo_container">
            <h3 className="footer_logo">
              Quick<span>VANUK</span>
            </h3>
          </div>
          <div className="footer_icon_div">
            <FontAwesomeIcon className="icon_one" icon={faFacebook} />
            <FontAwesomeIcon className="icon_two" icon={faLinkedin} />
            <FontAwesomeIcon className="icon_three" icon={faYoutube} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Footer;
