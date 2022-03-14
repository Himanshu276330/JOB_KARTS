import React from "react";
import ln from '../resources/linkedin.png'

function Footer() {
    return (
        <div className="footer">
        <div className="footerp1">
            <div className="sec1">
                <div className="header">
                    About Us
                </div>

                <div className="footerpage"><a href="">How it works</a></div>
                <div className="footerpage"><a href="">Careers</a></div>
                <div className="footerpage"><a href="">Terms of Service</a></div>
            </div>
            <div className="sec2">
                <div className="header">
                    Contact Us
                </div>

                <div className="footerpage"><a href="">Contact</a></div>
                <div className="footerpage"><a href="">Support</a></div>
            </div>
            <div className="sec3">
                <div className="header">
                    Social Media
                </div>

                <div className="footerpage"><a href="">Instagram</a></div>
                <div className="footerpage"><a href="">Facebook</a></div>
                <div className="footerpage"><a href="">Youtube</a></div>
                <div className="footerpage"><a href="">Twitter</a></div>
            </div>
        </div>
        <div className="footerp2">
        <div className="logoname">
          JOBSKART
        </div>

        <div className="others">
          <div className="inner">
          <div className="item"><div className="img"><a href=""><img src={ln} class="social" /></a></div><div className="name">Anurag</div></div>
          <div className="item"><div className="img"><a href=""><img src={ln} class="social" /></a></div><div className="name">Atharva</div></div>
          <div className="item"><div className="img"><a href=""><img src={ln} class="social" /></a></div><div className="name">Himanshu</div></div>
          <div className="item"><div className="img"><a href=""><img src={ln} class="social" /></a></div><div className="name">Manas</div></div>
          </div>
        </div>
      </div>
        </div>
    );
}

export default Footer;