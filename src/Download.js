import React from 'react'
import mobile from "./mobile.png";
import play from "./playstore.png";
import ios from "./ios.png";
import "./Download.css"

const Download = () => {
  return (
    <div className="Phone-image" id="download">
    <div className="Phone-image1   mob">
        <h1>Download Busybee</h1>

       <div className="center1">
        <pre className="imgf" >
            Order your favorite food & track
            your order with Busybee
                    </pre>
            
                </div>

        <div className="play-apple">
            <img className="aa" src={play} id="aa"/ >
            <img src={ios} className="aa1" id="aaa" alt="" />
        </div>
    
    </div> 

    <div className="Phone-image2   mob"  >
        <img src={mobile} alt=""/>
    </div>
</div>
  )
}

export default Download
