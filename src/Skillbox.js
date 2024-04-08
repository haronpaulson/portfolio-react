import React from 'react'

function Skillbox(props) {
  return (
    <div className='w-36 h-40 pt-4  bg-black text-center  text-white space-y-3 rounded-3xl'>
        <div className=''>    
            <img src={props.src} className='w-28 h-24 mx-auto rounded-2xl' alt='img' /></div>
        <div><p1 className=''> {props.name}</p1></div>
    </div>
  )
}

export default Skillbox;