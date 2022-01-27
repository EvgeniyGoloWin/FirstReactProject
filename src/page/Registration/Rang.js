import React, {useState} from "react";
import './Rang.css'

function Rang({AllStar}) {
    const [showRang, setShowRang] = useState(0);
    const dynar = [...Array(AllStar)].map((_, i) => <div className={'star'} onClick={() => clickStar(++i)}/>);

    function clickStar(index) {
        console.log(arguments);
        setShowRang(index)

    }

    return (
        <div className="rating" data-total-value={showRang} >
            {
                dynar
            }
        </div>

    )
}

export default Rang;