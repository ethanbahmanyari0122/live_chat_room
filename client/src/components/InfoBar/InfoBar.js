import React from "react";
import "./InfoBar.css";
import ecology from "../../icons/ecology.png";
import close from "../../icons/close.png";

const InfoBar = ({room}) => {
    return (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={ecology} alt={"online"}/>
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/"><img src={close} alt={"close image"}/></a>
        </div>
    </div>
)}

export default InfoBar;