import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {constants} from "../../Const"
import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/quotes.png";
import profilePic2 from "../../img/quotes.png";
import profilePic3 from "../../img/quotes.png";
import profilePic4 from "../../img/quotes.png";

const Testimonial = (props) => {
  const clients = [
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
     
      },
    
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
  ];
   if(props.page){
    var image ="";
  if(props.page.quotes_image && props.page.quotes_image.data  && props.page.quotes_image.data.attributes){
   image= constants.link+props.page.quotes_image.data.attributes.url ;
  }
  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>{props.page.quotes_title_span1}</span>
        <span>{props.page.quotes_title_span2}</span>
        <span>{props.page.quotes_title_span3}</span>
        <p>{props.page.quotes_description}</p>

  

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
      }
};

export default Testimonial;
