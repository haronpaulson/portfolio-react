import React from 'react'
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import './homepage.css';

function Contact() {
  return (
    <div pl-52 className=' pl-52 pr-40 pt-0  h-[360px] relative mt-20'>
 
        <div className=' border-2 border-white w-96 '></div>
        <div className=' border-2 border-white w-96 ml-[770px] '></div>
        <div className=' border-2 border-white w-96 absolute bottom-0'></div>
        <div className=' border-2 border-white w-96 ml-[770px] absolute bottom-0 '></div>

        
        <div className='  relative '>
            <div className=' text-center absolute -top-10 left-[415px]'>
                <h1 className=' text-white text-6xl font-bold'>Contact Me</h1>
             
             </div>
             <div className=' text-center absolute left-[415px] top-[326px]'>
         
             <ul className=' text-white  flex space-x-6 '>
             <li className=" "> <a href ="#"><FaInstagram className=' w-20 h-12' /></a></li>
             <li className=""><a href ="#"><FaLinkedin className=' w-20 h-12'/></a></li>
             <li className=""><a href ="#"><FaFacebook className=' w-20 h-12'/></a></li>
             </ul>
          
          </div>
        </div>
    </div>
  )
}

export default Contact