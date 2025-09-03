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

  const [cookieModalOpen, setCookieModalOpen] = useState(false);
  const [DataModalOpen, setDataModalOpen] = useState(false);
  const [exclusionModalOpen, setexclusionModalOpen] = useState(false);

  const openModal = (e, id) => {
    e.preventDefault();
    setActiveModalId(id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveModalId(null);
  };

  // COOKIE MODAL  START//
  const cookieOpenModal = (e) => {
    e.preventDefault();
    setCookieModalOpen(true);
  };

  const CookieCloseModal = () => {
    setCookieModalOpen(false);
  };
  // COOKIE MODAL  END//

  // DATA PRIVACY MODAL START //

  const DataOpenModal = (e) => {
    e.preventDefault();
    setDataModalOpen(true);
  };

  const dataCloseModal = () => {
    setDataModalOpen(false);
  };

  // DATA PRIVACY MODAL END //

  // EXCLUSION MODAL START //
  const exclusionOpenModal = (e) => {
    e.preventDefault();
    setexclusionModalOpen(true);
  };

  const exclusionCloseModal = () => {
    setexclusionModalOpen(false);
  };
  // EXCLUSION MODAL END //

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
            <h3>QuickVanUK</h3>
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
                <Link href="#" onClick={(e) => openModal(e, 1)}>
                  Career
                </Link>
              </p>
              <p>
                <Link href="#" onClick={(e) => openModal(e, 2)}>
                  Business
                </Link>
              </p>
              <p>
                <Link href="#" onClick={(e) => openModal(e, 3)}>
                  Sustainabillity
                </Link>
              </p>
            </div>
            <div>
              <h5>Useful Links</h5>
              <p>
                <Link href="#" onClick={(e) => openModal(e, 4)}>
                  Media
                </Link>
              </p>
              <p>
                <Link href="#" onClick={(e) => openModal(e, 5)}>
                  Sponsorship quickvanuk.com
                </Link>
              </p>
              {/* <p>
                <Link to="/contact" target="_blank">
                  Contact
                </Link>
              </p>
              <p>
                <Link to="/sitemap" target="_blank">
                  Sitemap
                </Link>
              </p> */}
            </div>
            <div>
              <h5>Legal</h5>
              <p>
                <Link to="" onClick={(e) => cookieOpenModal(e)}>
                  Cookie Policy
                </Link>
              </p>
              <p>
                <Link to="" onClick={(e) => DataOpenModal(e)}>
                  Data Privacy
                </Link>
              </p>
              <p>
                <Link to="" onClick={(e) => exclusionOpenModal(e)}>
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
              <small>© QuickVanUK. All rights reserved.</small>
            </div>
            <div className="footer_logo_container">
              <p className="footer_logo">QUICKVANUK</p>
            </div>
            <div className="footer_icon_div">
              <Link to="https://www.facebook.com/quickvanuk/" target="_blank">
                <FontAwesomeIcon className="icon_one" icon={faFacebook} />
              </Link>
              {/* <FontAwesomeIcon className="icon_two" icon={faLinkedin} /> */}
              {/* <FontAwesomeIcon className="icon_three" icon={faYoutube} /> */}
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

      {/* COOKIE POLICY START */}

      {cookieModalOpen && cookieModalOpen && (
        <div className="modal-overlay">
          <div className="footer_modal_div common_div">
            <div className="footer_faXmark_div" onClick={CookieCloseModal}>
              <FontAwesomeIcon className="footer_faXmark" icon={faXmark} />
            </div>
            <div className="CookieModal_text_div">
              <h2>Cookie Policy – QuickVanUK</h2>
              <br />
              <h4>1. Introduction</h4>
              <p>
                QuickVanUK (“we”, “our”, “us”) uses cookies and similar tracking
                technologies on our website to improve your browsing experience,
                analyse traffic, and deliver personalised content. By continuing
                to browse or use our website, you consent to the use of cookies
                in accordance with this Cookie Policy.
              </p>
              <br />
              <h4>2. What Are Cookies?</h4>
              <p>
                Cookies are small text files stored on your device (computer,
                smartphone, tablet) when you visit a website. They help websites
                function properly, remember your preferences, and improve
                overall performance.
              </p>
              <br />
              <h4>Cookies can be:</h4>
              <div className="cookies_can_be_div">
                <p>
                  Session cookies – Temporary, deleted when you close your
                  browser.
                </p>

                <p>
                  Persistent cookies – Remain on your device until they expire
                  or are deleted.
                </p>
                <p>First-party cookies – Set by our website.</p>
                <p>
                  Third-party cookies – Set by services from other companies
                  (e.g., analytics, advertising)
                </p>
              </div>

              <br />

              <h4>3. Types of Cookies We Use</h4>
              <p>a) Essential Cookies</p>
              <p>
                These are necessary for the website to function and cannot be
                switched off.
              </p>
              <p>Examples:</p>
              <p>Enabling secure log-in to your account</p>
              <p>Remembering items in your booking cart</p>
              <p>Protecting website security</p>

              <br />

              <p>b) Performance & Analytics Cookies</p>
              <p>
                These help us understand how visitors use our site so we can
                improve it.
              </p>
              <p>Examples:</p>
              <p>Pages visited, time spent on site</p>
              <p>Error messages</p>
              <p>Popular features used (Tools: Google Analytics, etc.)</p>

              <br />

              <p>c) Functional Cookies</p>
              <p>
                These allow the site to remember your preferences and settings.
              </p>
              <p>Examples:</p>
              <p>Language or region preference</p>
              <p>Saved booking details</p>

              <br />

              <p>d) Advertising & Marketing Cookies</p>
              <p>
                These may be used to show you relevant ads based on your
                browsing behaviour.
              </p>
              <p>Examples:</p>
              <p>Retargeting ads for QuickVanUK services</p>
              <p>
                Partner offers related to moving and delivery (We only use these
                with your consent.)
              </p>

              <br />

              <h4>4. Third-Party Cookies</h4>
              <p>
                Some cookies are set by third-party services integrated into our
                website (e.g., analytics, payment gateways, live chat). These
                parties may collect information about your device and usage
                patterns.
              </p>
              <p>Examples:</p>
              <p>Google Analytics – Website usage tracking</p>
              <p>Payment Providers – Secure payment processing</p>
              <p>Social Media Plugins – Facebook, Instagram sharing</p>

              <br />

              <h4>5. How to Manage or Disable Cookies</h4>
              <p>You can manage your cookie preferences anytime by:</p>
              <p>
                Adjusting settings in your browser (Chrome, Firefox, Safari,
                Edge)
              </p>
              <p>Deleting stored cookies from your device</p>
              <p>
                Blocking all cookies (note: some site features may not work
                properly)
              </p>
              <p>🔗 Instructions for managing cookies in major browsers</p>

              <br />

              <h4>6. Updates to This Cookie Policy</h4>
              <p>
                We may update this policy from time to time to reflect changes
                in technology, law, or our services. Any changes will be posted
                on this page with the updated date.
              </p>

              <br />

              <h4>7. Contact Us</h4>
              <p>If you have questions about our Cookie Policy, </p>
              <p>contact: info@quickvanuk.com </p>
            </div>
          </div>
        </div>
      )}

      {/* COOKIE POLICY END */}

      {/* DATA PRIVACY START */}
      {DataModalOpen && DataModalOpen && (
        <div className="modal-overlay">
          <div className="footer_modal_div common_div">
            <div className="footer_faXmark_div" onClick={dataCloseModal}>
              <FontAwesomeIcon className="footer_faXmark" icon={faXmark} />
            </div>
            <div className="CookieModal_text_div">
              <h2>Data Privacy Policy – QuickVanUK</h2>
              <br />

              <h4>1. Introduction</h4>
              <p>
                QuickVanUK (“we”, “our”, “us”) respects your privacy and is
                committed to protecting your personal information. This policy
                explains how we collect, use, store, and share your data in
                compliance with UK GDPR and Data Protection Act 2018.
              </p>
              <br />
              <p>
                By using our website, booking services, or contacting us, you
                agree to the terms described in this Privacy Policy.
              </p>

              <br />

              <h4>2. Who We Are</h4>
              <p>
                QuickVanUK is a UK-based moving and logistics service provider.
              </p>
              <p>📧 Contact: info@quickvanuk.com</p>
              <p>
                📍 Address: Office: Unit 22B, Park Avenue Industrial Estate,
                Sundon Park Rd, Luton LU3 3BP
              </p>
              <p>📞 Phone: +44 7352 622216</p>

              <br />

              <div>
                <h4>3. What Personal Data We Collect</h4>
                <p>
                  We collect only the information necessary to provide our
                  services:
                </p>
                <p>Identity Information – Name, title, date of birth</p>
                <p>Contact Information – Address, email, phone number</p>
                <p>
                  Booking Details – Pickup/delivery addresses, item descriptions
                </p>
                <p>
                  Payment Details – Billing address, payment card information
                  (processed securely via payment gateway; we do not store full
                  card details)
                </p>
                <p>
                  Account Details – Login credentials if you create an account
                </p>
                <p>
                  Technical Data – IP address, browser type, operating system
                  (collected via cookies)
                </p>
                <p>
                  Communication Data – Emails, phone calls, or chat history with
                  our team
                </p>
              </div>

              <br />

              <div>
                <h4>4. How We Use Your Data</h4>
                <p>Your information is used for:</p>
                <p>Processing bookings and payments</p>
                <p>Providing delivery and moving services</p>
                <p>Communicating updates about your booking</p>
                <p>Handling customer support requests</p>
                <p>Improving our website and service offerings</p>
                <p>Meeting legal and regulatory requirements</p>
                <p>
                  We will never sell your personal information to third parties.
                </p>
              </div>

              <br />

              <div>
                <h4>5. Legal Basis for Processing</h4>
                <p>We process your personal data under these legal grounds:</p>
                <p>Contractual necessity – To fulfil your booking</p>
                <p>
                  Legal obligation – To meet tax, safety, and regulatory
                  requirements
                </p>
                <p>
                  Legitimate interest – For service improvement and fraud
                  prevention
                </p>
                <p>
                  Consent – For marketing communications (you can withdraw
                  consent anytime)
                </p>
              </div>

              <br />

              <div>
                <h4>6. Sharing Your Data</h4>
                <p>We share your data only when necessary:</p>
                <p>
                  With service partners – Drivers, movers, logistics partners
                </p>
                <p>
                  {" "}
                  With payment processors – For secure payment transactions
                </p>
                <p>
                  With IT and support providers – Hosting, analytics, and
                  security services
                </p>
                <p>When required by law – Regulatory bodies, law enforcement</p>
              </div>

              <br />

              <div>
                <h4>7. Data Retention</h4>
                <p>We keep your personal data only as long as necessary:</p>
                <p>
                  Booking and payment data: Up to 6 years (for legal/tax
                  purposes)
                </p>
                <p>Account data: As long as your account is active</p>
                <p>Marketing data: Until you opt out or withdraw consent</p>
              </div>

              <br />

              <div>
                <h4>8. Your Rights (UK GDPR)</h4>
                <p>You have the right to:</p>
                <p>Access your personal data</p>
                <p>Correct inaccurate data</p>
                <p>Delete your data (“Right to be Forgotten”)</p>
                <p>Restrict processing</p>
                <p>Object to processing for marketing purposes</p>
                <p>
                  Data portability – Receive a copy of your data in a
                  machine-readable format
                </p>
                <p>To exercise these rights, email info@quickvanuk.com.</p>
              </div>

              <br />

              <div>
                <h4>9. Data Security</h4>
                <p>
                  We take appropriate measures to protect your data, including:
                </p>
                <p>Secure SSL encryption on our website</p>
                <p>Restricted access to personal data within our company</p>
                <p>Secure payment gateways for all transactions</p>
              </div>

              <br />

              <div>
                <h4>10. Updates to This Policy</h4>
                <p>
                  We may update this Privacy Policy from time to time. Updates
                  will be posted on our website with the revised date.
                </p>
              </div>

              <br />

              <div>
                <h4>📧 Contact Us</h4>
                <p>
                  If you have questions about this policy or your data, contact:
                </p>
                <p>Data Protection Officer – QuickVanUK</p>
                <p>Email: info@quickvanuk.com</p>
                <p>
                  Address: Unit 22B, Park Avenue Industrial Estate, Sundon Park
                  Rd, Luton LU3 3BP
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* DATA PRIVACY END */}

      {/* EXCLUSION MODAL START */}
      {exclusionModalOpen && exclusionModalOpen && (
        <div className="modal-overlay">
          <div className="footer_modal_div common_div">
            <div className="footer_faXmark_div" onClick={exclusionCloseModal}>
              <FontAwesomeIcon className="footer_faXmark" icon={faXmark} />
            </div>
            <div className="CookieModal_text_div">
              <h2>Exclusion of Liability – QuickVanUK</h2>

              <br />

              <h4>1. General Disclaimer</h4>
              <p>
                QuickVanUK strives to ensure that all services are delivered
                professionally, safely, and in accordance with agreed terms.
                However, except where prohibited by law, QuickVanUK shall not be
                held liable for any loss, damage, or delay caused by events
                beyond our reasonable control.
              </p>

              <br />

              <div>
                <h4>2. Limitation of Liability</h4>
                <p>To the fullest extent permitted by UK law:</p>
                <p>
                  QuickVanUK is not liable for indirect, incidental, or
                  consequential losses (such as loss of profits, business
                  interruption, or emotional distress).
                </p>
                <p>
                  Our total liability for any claim relating to a specific
                  booking shall not exceed the total amount paid by the customer
                  for that booking.
                </p>
              </div>

              <br />

              <div>
                <h4>3. Events Beyond Our Control</h4>
                <p>
                  QuickVanUK is not responsible for delays, damages, or service
                  failures caused by:
                </p>
                <p>Severe weather, road closures, or traffic conditions</p>
                <p>
                  Accidents, breakdowns, or mechanical issues beyond our control
                </p>
                <p>
                  Strikes, labour disputes, or unforeseen operational issues
                </p>
                <p>
                  Public authority restrictions, emergencies, or force majeure
                  events
                </p>
              </div>

              <br />

              <div>
                <h4>4. Customer Responsibilities</h4>
                <p>Customers are responsible for:</p>
                <p>
                  Ensuring accurate booking details (pickup/delivery addresses,
                  dates, times)
                </p>
                <p>Proper packaging of items to avoid damage in transit</p>
                <p>
                  Declaring fragile, hazardous, or high-value items in advance
                  QuickVanUK shall not be liable for damage to improperly
                  packed, undeclared, or prohibited items.
                </p>
              </div>

              <br />

              <h4>5. No Guarantee of Continuous Availability</h4>
              <p>
                While we aim to provide uninterrupted access to our website and
                booking platform, QuickVanUK cannot guarantee that the site will
                be available at all times due to maintenance, updates, or
                technical issues.
              </p>

              <br />

              <h4>6. Legal Compliance</h4>
              <p>
                Nothing in this Exclusion of Liability affects your statutory
                rights under UK Consumer Law.
              </p>

              <br />

              <h4>📧 Contact Us</h4>
              <p>For questions about these terms, contact:</p>
              <p>Email: info@quickvanuk.com</p>
              <p>
                Address: Unit 22B, Park Avenue Industrial Estate, Sundon Park
                Rd, Luton LU3 3BP
              </p>
            </div>
          </div>
        </div>
      )}
      {/* EXCLUSION MODAL END */}
    </>
  );
});

export default Footer;
