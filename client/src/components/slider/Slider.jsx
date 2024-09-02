import { useState } from "react";
import "./slider.scss";

function Slider({images }){
    const [imageindex,setImageindex]= useState(null)
    return(
        <div className="slider">
            { imageindex !== null && 
            <div className="fullslider">
                <div className="arrow">
                    <img src="/arrow.png" alt="" onClick={()=>setImageindex(imageindex > 0 ? imageindex-1 : images.length-1)}/>
                </div>
                <div className="imgc">
                    <img src={images[imageindex]} alt="" />
                </div>
                <div className="arrow">
                <img src="/arrow.png" className="right" alt="" onClick={()=>setImageindex(imageindex < images.length-1 ? imageindex+1 : 0)}/>
                </div>
                <div className="close" onClick={()=>setImageindex(null )}>X</div>
            </div>}
            <div className="bigimage">
                <img src={images[0]} alt="" onClick={()=>setImageindex(0)}/>
            </div>
            <div className="smallimages">
                {images.slice(1).map((image,index)=>(
                    <img src={image} alt="" key={index} onClick={()=>setImageindex(index+1)}/>
                ))}
            </div>
        </div>
    )
}

export default Slider