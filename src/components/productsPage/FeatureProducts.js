import React from "react"
import "./featureProducts.css"
import { Container, Row, Col } from "reactstrap";
import Heading from "../common/heading/Heading";
import {constants} from "../../Const" ;

export const FeatureProducts = (props) =>  {
  
  if(props.page){
   
      return (
        <>
          <section className='online' style={{textAlign:"center", alignItems:'center'}}>
            <Container>
            <Row className="align-items-center">
           
               
                  <Col size={9} md={4}>
                  <div className='box'>
                    <h1 className="CourseName">Umbraco Deploy</h1>
                    <p>Wave goodbye to deployment headaches and let your developers and editors work alongside each other with no interruptions. Deploy is available on Cloud and on-premises 

Explore Deploy</p>
                     <button>Explore Deploy</button>
                  </div>
                  </Col>
                  <Col size={9} md={4}>
                  <div className='box'>
                    <h1 className="CourseName">Umbraco Forms</h1>
                    <p>With this add-on to Umbraco CMS you get an easy way to build beautiful forms in Umbraco, so you can collect the data you need whether we're talking a contact form or a questionnaire Umbraco Forms Builder</p>
<button>Mangopulse Form Builder </button>
                  </div>
                  </Col>
                  <Col size={9} md={4}>
                  <div className='box'>
                    <h1 className="CourseName">Umbraco Learning Base</h1>
                    <p>Are you looking for an easy way to get started with your Umbraco product? Our YouTube channel is packed with helpful video tutorials, so you can learn Umbraco best practices at your own pace</p>
                    <button>Press play and learn </button>
                  </div>
                  </Col>
                
                  
              </Row>
            </Container>
          </section>
        </>
        );
  }
}