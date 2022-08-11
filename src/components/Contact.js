import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/marketing.svg";
import {constants} from "../Const"
import TrackVisibility from 'react-on-screen';

export const Contact = (props) => {
  if(props.page){
   var image ="";
   if(props.page.image && props.page.image.data && props.page.image.data.length>0){
    image = constants.link+props.page.image.data[0].attributes.url ;
   }
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
             <img src={image} alt="Contact Us"/>
          </Col>
          <Col size={12} md={6}>
                <h2>{props.page.Title}</h2>
                <form >
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder={props.page.nameinput} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder={props.page.lastnameinput} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" placeholder={props.page.Email} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel"  placeholder={props.page.number} />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6"  placeholder={props.page.messageinput} ></textarea>
                      <button id="send" type="submit"><span>Submit</span></button>
                    </Col>
                  </Row>
                </form>
    
          </Col>
          <Col size={12} md={6}>
           
          </Col>
        </Row>
      </Container>
    </section>
  )
  
  }
}