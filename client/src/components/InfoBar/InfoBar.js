import React from "react";
import "./InfoBar.css";
import closeIcon from "../../icons/onlineIcon.png";
import onlineIcon from "../../icons/closeIcon.png";

const InfoBar = ({room}) => {
    return (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={closeIcon} alt={"online"}/>
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/"><img src={onlineIcon} alt={"close image"}/></a>
        </div>
    </div>
)}

export default InfoBar;