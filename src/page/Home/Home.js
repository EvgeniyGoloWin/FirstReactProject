import React, {useState} from 'react';
import './Home.css'

function Home() {
    const [show, setShow] = useState(true);
    const example = 'test';
    function toggle() {
        setShow(!show)
    }
    return (
        <>
            <button className={"btn"} onClick={toggle} >
                {show ? 'Скрыть' : 'Показать'}
            </button>

            {
                show ? <p className={"somePar"}>{example}</p> : null
            }

        </>
    );
}
export default Home;