import React from "react";
import "./cms.css";
import { Container, Row, Col } from "reactstrap";
import cmsImg from "../../assets/img/kx-hp-1_jicion.webp";
import CountUp from "react-countup";

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
        <Row>
          <Col lg="6" md="6">
            <div className="cms__img">
              <img src={image} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="cms__content">
              <h2>{props.page.cms_title}</h2>
              <p>
              {props.page.cms_description}
              </p>
              <h4>{ props.page.cms_label} <i className="fa fa-arrow-right" aria-hidden="true"></i></h4>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
  }
};


