import React, {useState} from "react";
import './Square.css'

function Square() {
    const [show, setShow] = useState(true);
    function toggle () {
        setShow(!show)
    }
    return (
        <>
            <div className={'allSq'}>
            <div className={'someBlue'}>Blue</div>
            {
                show === true ? <div className={'someGreen'} onClick={toggle}>Green</div> :null
            }
            {
                show === false ? <div className={'someRed'} onClick={toggle}>Red</div> : null
            }
            </div>
        </>
    )
}

export default Square;