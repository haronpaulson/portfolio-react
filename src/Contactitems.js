import React from 'react'
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

function Contactitems() {
  return (
    <div className=' items-center text-yellow-400  space-y-16 justify-center p-8 pt-5'>
        <div className=' mb-6 flex  space-x-6  justify-center'>
        <div className=' w-64 h-12 bg-gray-700 rounded-md items-center flex p-3'>
        <IoMail className=' w-12 h-6 text-white'/><p1> haronpaulson@gmail.com</p1>
      </div>
        <div className=' w-60 h-12 bg-gray-700 rounded-md items-center flex p-3'>
        <FaPhoneAlt className=' w-12 h-6 text-white'/><p1> +91 9894162794</p1>
      </div>
      </div>

    <div className=' w-60 h-12 bg-gray-700 rounded-md items-center flex p-3 mx-auto'>
    <IoLocationOutline className=' w-12 h-6 text-white '/><p1> Coimbatore, Chennai</p1>
  </div>
    </div>
  )
}

export default Contactitems;