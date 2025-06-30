import React from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";
// import logo from "../../accets/Logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../accets/logo/Logo PNG.png";

const NavigationBar = ({ scrollToFooter }) => {
  return (
    <div>
      <header>
        <Link to="/home">
          <img className="logo" src={logo} alt="" />
          {/* <h1 className="quickVanuk">Quick Vanuk</h1> */}
        </Link>
        <input type="checkbox" id="menu-bar" />
        <label htmlFor="menu-bar">
          <FontAwesomeIcon icon={faBars} />
        </label>

        <nav className="navbar">
          <ul>
            <div className="li_div">
              <li className="photo_gallery">
                <Link to="/home">Home</Link>
              </li>
              {/* <li>
                <Link>
                  Services <FontAwesomeIcon icon={faAngleDown} />
                </Link>
                <ul>
                  <li>
                    <Link to="/brainTumourOperation">
                      Brain Tumour Operation
                    </Link>
                  </li>
                  <li>
                    <Link to="/endoscopicBrainSurgery">
                      Endoscopic Brain Surgery (Pituitory, Etv And Others)
                    </Link>
                  </li>
                  <li>
                    <Link to="/skullBaseSurgery">Skull Base Surgery</Link>
                  </li>
                  <li>
                    <Link to="/vascularNeuroSurgery">
                      Vascular Neuro Surgery
                    </Link>
                  </li>
                  <li>
                    <Link to="/pediatricNeuroSurgery">
                      Pediatric Neuro Surgery
                    </Link>
                  </li>
                  <li>
                    <Link to="/spinalSurgery">Spinal Surgery</Link>
                  </li>
                  <li>
                    <Link to="/traumaticBrainAndSpineSurgery">
                      Traumatic Brain & Spine Surgery
                    </Link>
                  </li>
                  <li>
                    <Link to="/epilepsySurgery">Epilepsy Surgery</Link>
                  </li>
                  <li>
                    <Link to="/spinalTumour">Spinal Tumour</Link>
                  </li>
                  <li>
                    <Link to="/microdiscectomy">Microdiscectomy</Link>
                  </li>
                  <li>
                    <Link to="/strokeSurgery">
                      Stroke Surgery (Urgent Surgery Of Stroke Patients)
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li>
                <Link to="/service">Service</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              {/* <li>
                <Link>
                  Gallery <FontAwesomeIcon icon={faAngleDown} />
                </Link>
                <ul>
                  <li>
                    <Link to="/photoGallery">Photo Gallery</Link>
                  </li>
                  <li>
                    <Link to="/videoGallery">Patient Feedback</Link>
                  </li>
                </ul>
              </li> */}
              <li className="photo_gallery">
                <Link to="/bookAVan"> Book a Van</Link>
              </li>
              <li>
                <Link to="/aboutUs">About Us</Link>
              </li>
              <li>
                <Link to="/becomeADriver"> Become a Driver</Link>
              </li>
              <li>
                <Link to="/faqs"> FAQs</Link>
              </li>
              <li>
                <Link to="#" onClick={scrollToFooter}>
                  {" "}
                  Contact Us
                </Link>
              </li>
            </div>
            <li>
              <div className="nav_fle_div">
                {/* <FontAwesomeIcon className="faEnvelope" icon={faEnvelope} /> */}
                {/* <Link>kazidmc@gmail.com</Link> */}
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavigationBar;
