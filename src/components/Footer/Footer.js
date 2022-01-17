import React from "react";
import './Footer.css'
import allImg from "../../assets/image/allImg";


function Footer() {
    return(
        <>
        <section className="contact">
            <div className="main_contact">
                <div className="image_contact">
                    <img src={allImg.Footer} alt="footer_foto" />
                </div>
                <div className="contact_text">
                    <div className="contact_info">
                        <p className="title">SOME INFO</p>
                        <div className="text_info">
                            <p> "Lorem ipsum dolor sit amet,"</p>
                            <p> consectetuer adipiscing elit.</p>
                            <p> Aenean commodo ligula.</p>
                        </div>
                    </div>
                    <div className="contact_info">
                        <p className="title">ENFOLD HEALTH</p>
                        <div className="text_info">
                            <p>Main Street 1, Olcott</p>
                            <p>Buffalo, United States</p>
                            <br />
                            <p>+555 283 784 333</p>
                            <a href="mailto:office@enfold-health.com">office@enfold-health.com</a>
                        </div>
                    </div>
                    <div className="contact_info">
                        <p className="title">OFFICE HOURS</p>
                        <div className="text_info">
                            <p>Mo-Fr: 8:00-19:00</p>
                            <p>Sa: 8:00-14:00</p>
                            <p>Su: closed</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <footer>
        <div className="text_footer">© Copyright - ThriveTalk 2017</div>
    </footer>
        </>
    )
}
export default Footer;