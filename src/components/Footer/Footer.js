import React, { forwardRef } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const Footer = forwardRef((props, ref) => {
  return (
    <div>
      <div ref={ref} className="footer_parent_div">
        <div className="footer_grit_div">
          <div className="footer_cart">
            <h3>QuickvanUK</h3>
            <div className="footer_quick_contact_div">
              <div className="footer_flex_div">
                <p>📞</p>
                <p>Phone: +447421492922</p>
              </div>

              <div className="footer_flex_div">
                <p>📧</p>
                <p>Email: info@quickvanuk.com</p>
              </div>

              <div className="footer_flex_div">
                <p>🏢</p>
                <p>
                  Office: Unit 22B, Park Avenue Industrial Estate, Sundon Park
                  Rd, Luton LU3 3BP
                </p>
              </div>
              <div className="footer_flex_div">
                <p>🕒</p>
                <p>Hours: Mon-Sat: 8 AM - 8 PM | Sun: 10 AM - 5 PM</p>
              </div>
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
      <div hidden className="footer_modal_div">
        <div className="footer_faXmark_div">
          <p></p>
          <FontAwesomeIcon className="footer_faXmark" icon={faXmark} />
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
          corrupti similique libero provident vero! Nam, totam illo cupiditate
          non nesciunt dolorem hic corrupti rem minus quaerat tempore asperiores
          quos magni.
        </p>
      </div>
    </div>
  );
});

export default Footer;
