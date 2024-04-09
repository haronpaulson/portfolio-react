import React, { useEffect, useState } from "react";
import axios from "axios";
import './homepage.css'
import { CgProfile } from "react-icons/cg";

function Header(){
    
   
    const[value, setValue] = useState(true);

     return (
        <div>


            <div className="flex  items-center justify-between p-4 shadow-md shadow-white">
                <div className="">
                  
                  <img src='person.jpg' alt="img" className=" rounded-full w-14 h-10" />
                </div>
                <div className="  mr-12 text-md font-semibold text-white">
                    <ul className=" flex space-x-6 justify-end  hover: cursor-pointer ">
                    <li className="list">Home</li>
                    <li className="list">About</li>
                    <li className="list">Contact</li>
                    </ul>
                </div>
                <div className=" text-white text-lg flex items-center space-x-2 mr-4">
               
                    <CgProfile className=" w-10 h-8"/>
                  
                    
                </div>
                
            </div>
            

        </div>
     )
}

export default Header;
