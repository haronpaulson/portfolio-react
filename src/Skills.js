import React, {useState} from "react";
import Skillbox from "./Skillbox";
import { skillItems, skillItems2 } from "./Skillboxdata";


function Skills() {
    const [viewstatus, setViewstatus] = useState(false);
    const [buttonstatus, setButtonstatus] = useState(false);
    const changeStatus = () => {
        setButtonstatus(!buttonstatus);
        setViewstatus(!viewstatus);
    }

    return (
        <div className="max-w-6xl mx-auto ">
            <div className=" space-y-3">
                <div>
                    <h1 className=" text-center text-white font-bold text-xl">My Skills</h1>
                </div>
                <div className=" flex text-center justify-center grid-cols-4 space-x-6 p-3">
                {skillItems.map((item) => <Skillbox name={item.name} src={item.src}/>)}
    
                </div>

                <div className={`flex grid-cols-4 justify-center space-x-6 p-3 ${viewstatus? 'flex': 'hidden'} transition-all duration-200`}>
                {skillItems.map((item) => <Skillbox name={item.name} src={item.src}/>)}</div>
                <div className="text-right pr-8">
                
                {buttonstatus && (<div>< button className="  text-black bg-yellow-400 p-1 border-1 " onClick={changeStatus}> View less</button></div>)}
                {!buttonstatus && (<div>< button className="  text-black bg-yellow-400 p-1 border-1" onClick={changeStatus}> View more</button></div>)}
                </div>
                <div className=" text-end pr-8">
                
                </div>

                
            </div>
  
          

        </div>
    )
}

export default Skills;