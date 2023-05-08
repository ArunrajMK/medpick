import React from 'react'
import "./features.css"
import image1 from "../image/image1.png"
import image2 from "../image/image2.png"
import image3 from "../image/image3.png"
function Features() {
  return (
    <div id="features">
        <h2 id="featureText">Features</h2>
        <div id="innerDiv">
         <img src={image1} alt="icon"/>
         <img src={image2} alt="icon"/>
         <img src={image3} alt="icon"/>
        </div>
    </div>
  )
}

export default Features