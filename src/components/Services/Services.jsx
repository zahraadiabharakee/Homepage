import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import { Container, Row, Col } from "reactstrap";
import CmsBannerImg from "../../assets/img/illustration.png";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";

import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context


  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    
    <div className="services" id="services">
         <section className="CmsBanner__content">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div  className="cms_section">
              <h2>Mangopulse CMS</h2>
              <p>
              Mangopulse, the world's leading open-source content management system built on the latest .NET (ASP.NET Core) technology, offers all you need to create a powerful, user-friendly website.

Flexible building blocks and rich integration possibilities let developers spin up truly customized solutions that are a joy for content editors to manage thanks to an intuitive user interface.

Try Mangopulse and see for yourself why the CMS is loved by thousands of developers and content editors around the world!
              </p>
             
            </div>
          </Col>
          <Col lg="6" md="6">
          <div className="services" id="services">
     
     <div className="cards">
       {/* first card */}
       <motion.div
         initial={{ top:"-20", left: "25rem" }}
         whileInView={{ left: "16rem" }}
         transition={transition}
       >
         <Card
           emoji={HeartEmoji}
           heading={"Design"}
           detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
         />
       </motion.div>
       {/* second card */}
       <motion.div
         initial={{ left: "-11rem", top: "-5rem" }}
         whileInView={{ left: "2rem" }}
         transition={transition}
       >
         <Card
           emoji={Glasses}
           heading={"Developer"}
           detail={"Html, Css, JavaScript, React, Nodejs, Express"}
         />
       </motion.div>
       {/* 3rd */}
       <motion.div
         initial={{ top: "-5rem", left: "25rem" }}
         whileInView={{ left: "30rem" }}
         transition={transition}
       >
         <Card
           emoji={Humble}
           heading={"UI/UX"}
           detail={
             "Lorem ispum dummy text are usually use in section "
           }
           color="rgba(252, 166, 31, 0.45)"
         />
       </motion.div>
       <div
         className="blur s-blur2"
         style={{ background: "var(--purple)" }}
       ></div>
     </div>
   </div>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  );
};

export default Services;

   