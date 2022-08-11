import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assets/img/kx-hp-2_acgyai.webp";
import "./choose-us.css";
import {constants} from "../../Const"
import ReactPlayer from "react-player";

export const Chooseus = (props) =>  {
  const [showVideo, setShowVideo] = useState(false);
  if(props.page){
      var image ="";
      if(props.page.A_cardImage && props.page.A_cardImage.data && props.page.A_cardImage.data.length>0){
       image = constants.link+props.page.A_cardImage.data[0].attributes.url ;
      }
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>{props.page.B_cardTitle}</h2>
              <p>
              {props.page.B_cardDescription}
              </p>
              <h4>{props.page.B_cardLabel}<i className="fa fa-arrow-right" aria-hidden="true"></i></h4>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=qFp27TR4Yew"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={image} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                   className='far fa-play-circle'
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
              }
};

