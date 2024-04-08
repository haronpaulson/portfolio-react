import React from "react";
import "./homepage.css";


function HomeImage() {
    return (
        <div className="frontscreen-img h-80 mr-40   relative">
            <div>
                <div className=" absolute top-16 left-72 text-xl font-semibold text-white">
                    <h1>I'm <span className=" text-yellow-400 font-bold text-3xl font-serif"> Haron Paulson</span></h1>
                    <p1>React Developer and Junior Business Analyst</p1><br/>
                    <div className="">
                    <button className=" border-2 border-yellow-400 p-1 text-sm text-yellow-400 rounded-md mt-3 text-right"> Contact Me</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default HomeImage;