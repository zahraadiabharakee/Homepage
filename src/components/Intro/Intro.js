import React, { useContext } from "react";
import "./Intro.css";
import Heading from "../common/heading/Heading";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.svg";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/point-ico.svg";
import star from "../../img/star-ico.svg";
import cursor from "../../img/cursor-ico.svg";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <div className="intro__content">
          <Heading subtitle="friendly when you need it" title="Built for user-centric companies like yours" />
              <h4>get what you need <i className="fa fa-arrow-right" aria-hidden="true"></i></h4>
            </div>
      
        </div>
        <Link to="contact" smooth={true} spy={true}>
        
        </Link>
        {/* social icons */}
        <div className="i-icons">
          
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-30%" }}
          whileInView={{ left: "-10%" }}
          className="Crown"
          transition={transition}
          src={cursor}
          alt=""
        />

    
    
        {/* <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={star}/>
        </motion.div> */}

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
