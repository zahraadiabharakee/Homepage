import { Tab, Nav } from "react-bootstrap";
import { Container, Row, Col } from "reactstrap";
import { ProjectCard } from "../ProjectCard";
import "./cmsclients.css";
import meter1 from "../../assets/img/ucommerce-no-bg.webp";
import meter2 from "../../assets/img/umarketingsuite-logo-no-bg.webp";
import meter3 from "../../assets/img/uskinned-logo-no-bg.webp";
import meter4 from "../../assets/img/qbank-transparent-bg.webp";
import TrackVisibility from 'react-on-screen';

export const CmsClients = (props) => {


  if(props.page){
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""} style={{textAlign:"center", alignItems:'center'}}>
                <h2>Hear it from our happy users</h2>
               
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Ease of use and flexibility</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                    <div className="circle"></div>
                      <Nav.Link eventKey="second">{props.page.tab2}</Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                    <div className="circle"></div>
                      <Nav.Link eventKey="third">{props.page.tab3}</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp"  className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                        <img className="images"src={meter1} />
                    <p>{props.page.Description1}</p>
                      <button className="buttonProject">View More !</button>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <img className="images"src={meter2} />
                      <p>{props.page.Description2}</p>
                      <button className="buttonProject">how it's simple</button>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <img className="images"src={meter3} />
                      <p>{props.page.Description3}</p>
                      <button className="buttonProject">how to integrate</button>
                       
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    
    </section>
  );
}
}