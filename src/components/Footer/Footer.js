import React, { forwardRef, useState } from "react";
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
  const [modalOpen, setModalOpen] = useState(false);
  const [activeModalId, setActiveModalId] = useState(null);

  const openModal = (e, id) => {
    e.preventDefault();
    setActiveModalId(id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveModalId(null);
  };

  const modalArray = [
    {
      id: 1,
      title: "Join Our Team at QuickVanUK",
      text: "We’re always looking for talented drivers, movers, and customer service professionals to join our growing team. At QuickVanUK, we value reliability, efficiency, and a customer-first attitude. Whether you’re an experienced driver or new to logistics, we provide training, fair pay, and opportunities to grow with us.",
      email: "📩 To apply, email your CV to info@quickvanuk.com",
    },
    {
      id: 2,
      title: "Business Partnerships & B2B Solutions",
      text: "QuickVanUK offers tailored solutions for retail stores, e-commerce businesses, and wholesalers. From bulk deliveries to last-mile logistics, we work as an extension of your business—reliable, affordable, and on time.",
      email:
        "📞 Contact our Business Team at info@quickvanuk.com to explore partnerships.",
    },
    {
      id: 3,
      title: "Our Commitment to Sustainability",
      text: "QuickVanUK is committed to reducing our environmental impact by:",
      textOne: "Using fuel-efficient and low-emission vehicles where possible",
      textTwo: "Planning routes smartly to minimize mileage and emissions",
      textThree:
        "Encouraging recycling and responsible disposal during moves. Our goal is to make moving eco-conscious and responsible.",
    },
    {
      id: 4,
      title: "Press & Media Enquiries",
      text: "Members of the press are welcome to contact us for company updates, press kits, or media interviews. We’re happy to share our story, mission, and service innovations.",
      email: "📩 For media requests, email info@quickvanuk.com",
    },
    {
      id: 5,
      title: "Sponsorship Opportunities",
      text: "QuickVanUK proudly supports local community events, charity drives, and small business initiatives. If you have an event or project that aligns with our values, we’d love to hear from you.",
      email: "📩 Send sponsorship proposals to info@quickvanuk.com",
    },
  ];

  const activeModalData = modalArray.find((item) => item.id === activeModalId);

  return (
    <>
      <div ref={ref} className="footer_parent_div">
        <div className="footer_grit_div">
          <div className="footer_cart">
            <h3>QuickvanUK</h3>
            <div className="footer_quick_contact_div">
              <div className="footer_flex_div">
                <p>📞</p>
                <p>Phone: +44 7352 622216</p>
              </div>
              <div className="footer_flex_div">
                <p>📧</p>
                <p>Email: info@quickvanuk.com</p>
              </div>
              <div className="footer_flex_div">
                <p>🏢</p>
                <p className="footer_office">
                  Office: Unit 22B, Park Avenue Industrial Estate, Sundon Park
                  Rd, Luton LU3 3BP
                </p>
              </div>
              <div className="footer_flex_div">
                <p>🕒</p>
                <p className="footer_hours">
                  Hours: Mon-Sat: 8 AM - 8 PM | Sun: 10 AM - 5 PM
                </p>
              </div>
            </div>
          </div>

          <div className="footer_three_cart_parent_div">
            <div>
              <h5>Company</h5>
              <p>
                <a href="#" onClick={(e) => openModal(e, 1)}>
                  Career
                </a>
              </p>
              <p>
                <a href="#" onClick={(e) => openModal(e, 2)}>
                  Business
                </a>
              </p>
              <p>
                <a href="#" onClick={(e) => openModal(e, 3)}>
                  Sustainabillity
                </a>
              </p>
            </div>
            <div>
              <h5>Useful Links</h5>
              <p>
                <a href="#" onClick={(e) => openModal(e, 4)}>
                  Media
                </a>
              </p>
              <p>
                <a href="#" onClick={(e) => openModal(e, 5)}>
                  Sponsorship
                </a>
              </p>
              <p>
                <Link to="/contact" target="_blank">
                  Contact
                </Link>
              </p>
              <p>
                <Link to="/sitemap" target="_blank">
                  Sitemap
                </Link>
              </p>
            </div>
            <div>
              <h5>Legal</h5>
              <p>
                <Link to="/cookiePolicy" target="_blank">
                  Cookie Policy
                </Link>
              </p>
              <p>
                <Link to="/dataPrivacy" target="_blank">
                  Data Privacy
                </Link>
              </p>
              <p>
                <Link to="/exclusionOfLiabillty" target="_blank">
                  Exclusion of Liability
                </Link>
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
              <p className="footer_logo">QUICKVANUK</p>
            </div>
            <div className="footer_icon_div">
              <Link to="https://www.facebook.com/quickvanuk/" target="_blank">
                <FontAwesomeIcon className="icon_one" icon={faFacebook} />
              </Link>
              <FontAwesomeIcon className="icon_two" icon={faLinkedin} />
              <FontAwesomeIcon className="icon_three" icon={faYoutube} />
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Modal */}
      {modalOpen && activeModalData && (
        <div className="modal-overlay">
          <div className="footer_modal_div">
            <div className="footer_faXmark_div" onClick={closeModal}>
              <FontAwesomeIcon className="footer_faXmark" icon={faXmark} />
            </div>
            <div className="modal_text_div">
              <h4>{activeModalData.title}</h4>
              <p>{activeModalData.text}</p>
              {activeModalData.textOne && <p>• {activeModalData.textOne}</p>}
              {activeModalData.textTwo && <p>• {activeModalData.textTwo}</p>}
              {activeModalData.textThree && (
                <p>• {activeModalData.textThree}</p>
              )}
              <p>{activeModalData.email}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default Footer;
