import React from 'react';
import { testimonialData } from './Testimonialsdata';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className=' pl-20 pr-10'>
        <div>
            <div>
                <h1 className=' text-white text-4xl font-bold text-center mb-0'> Testimonials</h1>
                <img src="" alt='person-img' className=' rounded-lg ' ></img>
            </div>
        </div>
      
    
        <Slider {...settings}>
        {testimonialData.map((item) => (
            <div className='  space-x-10 pl-96 pt-10 space-y-6 bg-slate-900'>
            <div className=' flex pl-40'>
            
            <img src='person.jpg' alt='person-img' className=' rounded-lg ' />
        </div>
             <div className=' text-white pl-0 max-w-[600px] text-center'>
                <p1> {item.about}.</p1>
                <br /><p2 className =' text-yellow-400'>{item.name}</p2><br/>
                <p3 className=' text-yellow-400'>{item.role} , Anitech Pvt Ltd</p3>
              </div>

      
           </div>
            

        ))}
        </Slider>
        </div>
    
  )
}

export default Testimonial;