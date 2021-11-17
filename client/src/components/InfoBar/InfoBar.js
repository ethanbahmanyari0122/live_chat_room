import React from "react";
import "./InfoBar.css";

const InfoBar =() => {
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon}/>
            <h3>roomName</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/"><img src={closeIcon} alt={"close image"}/></a>
        </div>
    </div>
}

export default InfoBar;