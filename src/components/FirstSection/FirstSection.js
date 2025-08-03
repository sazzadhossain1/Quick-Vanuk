import React from "react";
import "./FirstSection.css";

import photoOne from "../../accets/FourthSectionPhoto/photoOne.webp";
import photoTwo from "../../accets/FourthSectionPhoto/photoTwo.gif";
import photoThree from "../../accets/FourthSectionPhoto/photoThree.gif";
import photoFour from "../../accets/FourthSectionPhoto/photoFour.gif";
import businessLogistics from "../../accets/FourthSectionPhoto/Business Logistics.jpg";

const FirstSection = () => {
  return (
    <div>
      <h1 className="why_choose_title">Why choose QuickvanUK?</h1>
      <div className="fourth_section_grid_div">
        <div className="photoOne_div">
          <img
            className="fourth_section_photoOne"
            src={businessLogistics}
            alt=""
          />
        </div>
        <div className="fourth_section_text_parent_div">
          {/* <h3>Why choose QuickvanUK?</h3> */}
          <h1 className="newsAndEvents">Your local delivery partner</h1>
          <div className="firstSection_inner_text_div">
            <p>
              🚛 Complete Moving & Delivery Solution From household moves to
              business deliveries, QuickVanUK combines a "Man & Van" service
              with on-demand logistics—so you don’t need multiple providers.
            </p>

            {/* <p>
              {" "}
              📦 Residential & Commercial Moves Whether you're shifting homes,
              relocating your office, or moving out as a student—we’ve got
              tailored solutions to match every need.
            </p> */}
            <p>
              🛒 Store Pickup & B2B Deliveries Order something from IKEA, B&Q,
              or a wholesaler? We’ll pick it up and deliver it safely to your
              door—fast.
            </p>
            {/* <p>
              ❄ Specialized Frozen & Grocery Delivery Supporting local grocery
              businesses with reliable cold-chain transport.
            </p> */}
            <p>
              📱 Easy Booking via Website Our platform is designed for instant
              quotes, live tracking, and cashless booking—a modern experience.
            </p>
            <p>
              💰 Flexible & Transparent Pricing Choose from hourly, fixed, or
              distance-based rates. No hidden fees, just honest value.
            </p>
            <p>
              ⚡ Same-Day & Express Delivery Options Need it done urgently? Opt
              for our premium same-day or express service add-ons.
            </p>
            <p>
              🧰 Helpful Add-On Services Packing, furniture assembly,
              disassembly, and even waste removal available—saving you stress
              and time.
            </p>
            {/* <p>
              📍 Serving Luton, London & Beyond From local trips to
              long-distance hauls, we cover wide areas with punctual and
              professional service.
            </p> */}
            {/* <p>
              🌐 Perfect for Individuals & Businesses Alike Trusted by families,
              students, e-commerce sellers, corporate offices, and retailers.
            </p> */}
            <p>
              🧑‍💼 Professional, Friendly Staff Trained movers and drivers who
              treat your belongings with the care they deserve.
            </p>
            {/* <p>
              🤝 Trustworthy & Reliable Our brand is built on punctuality,
              professionalism, and peace of mind for you.
            </p> */}
            <p>
              📣 "Making Every Move Hassle-Free" We truly live our slogan—with
              tech, people, and service designed to make moving stress-free.
            </p>
          </div>
          {/* <div className="fourth_section_flex_div">
          <img className="fourth_section_flex_photo" src={photoTwo} alt="" />
          <div>
          <h4>View & Pick</h4>
          <p>Simply pick your future house from our product catalogue.</p>
          </div>
        </div>
        <div className="fourth_section_flex_div">
        <img className="fourth_section_flex_photo" src={photoThree} alt="" />
        <div>
            <h4>View & Pick</h4>
            <p>Simply pick your future house from our product catalogue.</p>
          </div>
          </div>
          <div className="fourth_section_flex_div">
          <img className="fourth_section_flex_photo" src={photoFour} alt="" />
          <div>
          <h4>View & Pick</h4>
          <p>Simply pick your future house from our product catalogue.</p>
          </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
