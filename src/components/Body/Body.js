import React from "react";
import './Body.css'
import allImg from "../../assets/image/allImg";

function Body() {
    return(
        <>
        <section className="main_section">
            <div className="main_content">
                <div className="header__logo content_logo">Thrivetalk</div>
                <div className="main_text">HELPING YOU THRIVE IN ALL AREAS OF LIFE</div>
                <div className="paragraph">Our highly talented therapists can help you with a range of issues including
                    relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.
                </div>
                <div className="block_buttons">
                    <button type="button" className="button1">WHO AM I</button>
                    <button type="button" className="button2">WHAT DO I DO</button>
                </div>
            </div>
            <div className="image">
                <img src={allImg.Main} alt="Главный экран" />
            </div>
            <div className="oval">
                <img src={allImg.Backgr} alt="Задний фон" />
            </div>
        </section>
    </>
    )
}
export default Body;