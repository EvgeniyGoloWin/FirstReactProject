import React, {useState} from "react";
import './NewButton.css'

function NewButton() {
    const [hide,setHide] = useState(false);
    function tools() {
        setHide(!hide)
    }
    return (
        <>
            <div>
                <button onClick={tools}>
                    {hide ? 'hide' : 'show'}
                </button>
                { hide ? <hi><br/>Some Text</hi> : null}
                
            </div>
        </>
    );
    }
    export default NewButton;