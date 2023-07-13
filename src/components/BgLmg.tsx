import React from "react";
import './Bglmg.css'

interface BglmgProps{
    active : boolean;
}

const  Bglmg:React.FC<BglmgProps> = ({active}) => {
    return (
    <div id="bglmg" className={`bglmg-page ${active ? "active" : ""}`}>
        <div className="bglmg-image"></div>
    </div>
    );
}; 

export default Bglmg; 