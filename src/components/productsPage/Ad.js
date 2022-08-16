import React from "react";
import "./Ad-Section.css";

import image from '../../assets/img/globe.png' ;
import { Container, Row, Col } from "reactstrap";
import {constants} from "../../Const"
export const Ad = (props) =>  {
  if(props.page){

  return (
    <section className="Ad">
      <Container>
        <Row>
       
          <Col Lg="6" md="4" className="section">
            <h1 className="Stat">Number of active installs across the world</h1>
            <h4 className="values">731,438</h4>
            </Col>
            <Col Lg="6" md="4" className="section">
            <h1 className="Stat">Number of active members </h1>
            <h4 className="values">221,745</h4>
            </Col>
            <Col  Lg="6" md="4" className="section">
            <h1 className="Stat">Known free Umbraco packages available</h1>
            <h4 className="values">1,211</h4>

          </Col>

       
        </Row>
        
      </Container>
    </section>
  );
  }
};


