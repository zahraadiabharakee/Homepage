import React from "react";
import "./cms.css";
import Upwork from "../../img/star-ico.svg";
import Fiverr from "../../img/point-ico.svg";
import Amazon from "../../img/cursor-ico.svg";
import Shopify from "../../img/users-ico.svg";
import Facebook from "../../img/Facebook.png";
import { motion } from "framer-motion";
import { Container, Row, Col } from "reactstrap";


import {constants} from "../../Const"
export const Cms = (props) =>  {
  if(props.page){
    var image ="";
    if(props.page.cms_image && props.page.cms_image.data && props.page.cms_image.data.attributes){
     image = constants.link+props.page.cms_image.data.attributes.url ;
    }
  return (

<section>
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
          <div className="cms__img">
          <div className="cms__content">
              <h2>{props.page.cms_title}</h2>
              <p>
              {props.page.cms_description}
              </p>
              <h4>{ props.page.cms_label} <i className="fa fa-arrow-right" aria-hidden="true"></i></h4>
            </div>  
            </div>
          </Col>
          <Col size={12} md={6}>
       
          <div className="works" id="works">
    
    
    <div className="w-right">
      <motion.div
        initial={{ rotate: 45 }}
        whileInView={{ rotate: 0 }}
        viewport={{ margin: "-40px" }}
        transition={{ duration: 3.5, type: "spring" }}
        className="w-mainCircle"
      >
        <div className="w-secCircle">
          <img src={Upwork} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={Fiverr} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={Amazon} alt="" />
        </div>{" "}
        <div className="w-secCircle">
          <img src={Shopify} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={Facebook} alt="" />
        </div>
      </motion.div>
      {/* background Circles */}
      <div className="w-backCircle blueCircle"></div>
      <div className="w-backCircle yellowCircle"></div>
    </div>
  </div>
    
          </Col>
        </Row>
      </Container>
    </section>
  );
  }
};

