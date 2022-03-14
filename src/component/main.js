import react from "react";

function creteCard(param){
    
}

function Main() {
    return (
        <div>
            {/* main section */}
            <div id="main" className="container">
                <h1 className="title">Find your dream job</h1>
                <p className="para">Limitless Opportunities</p>
                <button className="btn">Explore Jobs</button>
            </div>
            
            {/* About section */}
            <div id="about-section" className="container">
                <p className="para">WHAT DO WE DO?</p>
                <h1 className="about-title">We help people in finding jobs</h1>
                <p className="para">Click to know more about us</p>
                <button className="btn">ABOUT</button>
            </div>

            {/*About some trending jobs*/}
            <div id="trending-section" className="container">
                <p className="para">Trending Jobs</p>
                <div className="trending-card">

                </div>
            </div>
        </div>

    );
}

export default Main;