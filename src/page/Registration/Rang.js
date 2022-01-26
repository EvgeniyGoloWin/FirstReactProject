import React, {useState} from "react";
import './Rang.css'

function Rang() {
    const [showRang,setShowRang]=useState(0);
    function clickStar() {

    }

    return (
        <div className="rating" onClick={clickStar}>
            <div className={'star'}/>
            <div className={'star'}/>
            <div className={'star'}/>
            <div className={'star'}/>
            <div className={'star'}/>
        </div>
    )
}
export default Rang;