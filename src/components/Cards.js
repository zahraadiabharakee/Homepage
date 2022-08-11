import React from 'react';
import CardItem from './CardItem';
import gif1 from "../assets/img/kx-hp-5_oxzumy.webp";
import gif2 from "../assets/img/kx-hp-3_nqby39.webp";
import gif3 from "../assets/videos/giphy.gif";
import {constants} from "../Const"
export const Cards = (props) => {
  if(props.page){
    var image1 ="";
    if(props.page.D_cardImage && props.page.D_cardImage.data &&props.page.D_cardImage.data.length>0 ){
     image1 = constants.link+props.page.D_cardImage.data[0].attributes.url ;
    }
    var image2 ="";
    if(props.page.E_cardImage && props.page.E_cardImage.data  && props.page.E_cardImage.data.length>0){
     image2 = constants.link+props.page.E_cardImage.data[0].attributes.url ;
    }
  return (

    <div className='cards'>
      
         <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src={image1}
                    text={props.page.card1description}
                    label={props.page.card1button}
                    path='/services'
                   
                    />
                     <CardItem
              src={image2}
              text={props.page.card3button}
              label={props.page.card3description}
              path='/services'
            />
            
                </ul>
            </div>
         </div>
    </div>
  )
  }
}


