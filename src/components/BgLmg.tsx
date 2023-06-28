import React from "react";
import './BgLmg.css'

interface BgLmgProps{
    active : boolean;
}

const BgLmg :React.FC<BgLmgProps> = ({active}) => {
    return (
    <div id="bglmg" className={`bglmg-page ${active ? "active" : ""}`}>
        <div className="bglmg-image"></div>
    </div>
    );
}; 

export default BgLmg; 