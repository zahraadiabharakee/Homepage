import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Cards } from "./components/Cards" ;
import { MailchimpForm } from "./components/MailchimpForm" ;
import {Chooseus} from "./components/Chooseus/ChooseUs";
import {Aboutus} from "./components/Aboutus/AboutUs";
import {Cms} from "./components/cms/Cms";
import {Demo} from "./components/demo/Demo";
import axios from 'axios';
import { useEffect, useState } from 'react';
import {Features} from "./components/AllFeatures/Features"
import {Article} from "./components/articles/Article";
import {Products } from "./components/products/Products"
import Team from "./components/team/Team";

function App() {

  const [error, setError] = useState(null);
  const [homePage, setHomePage] = useState({});
  useEffect(() => {
    console.log(homePage, homePage.Navbar);
    axios
      .get('http://localhost:1337/api/home-page?populate=deep')
      .then(({ data }) => setHomePage(data.data.attributes))
      .catch((error) => setError(error))
  }, [])
  

  

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <div className="App">
      
      <NavBar page={homePage.Navbar}/>
      <Banner page={homePage.BannerLayout} />
      <Skills page={homePage.clients}/>
      <Aboutus page={homePage.cards}/>
      <Chooseus page={homePage.cards} />
      <Aboutus page={homePage.cards}/>
      <Demo page={homePage.demo}/>
      <Products page={homePage.products}/>
      <Article page={homePage.Team}/>
      
      <Features page={homePage.features} />
      <Cms page={homePage.cms} />
      <Projects page={homePage.projects}/>
      <Contact page={homePage.contactbox} />
      <Footer page={homePage.Footer}/>
     
     
        
     
    </div>
  );
}

export default App;