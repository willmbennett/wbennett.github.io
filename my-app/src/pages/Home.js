import React from "react";
import '../stylesheets/home.css';

const Home = () => {
    return (
    <div className="home">
        <div className="page-wrapper pointer">
            <ul className="slides pointer">
                <li className="slide">
                    <div className="welcome card">
                        <p>Welcome to my website, I'm building this from scratch as a side project!
                        </p>
                    </div>
                </li>
                <li className="slide">
                    <div className="about-me">
                        <img className="profile-image" src="https://i.imgur.com/FZx96YY.jpg"/>
                        <div className="header-text">
                            <div className="header-text-center">
                                <h1>Meet Will</h1>
                                <h3>Product Manager Turned Data Scientist</h3>
                                <br/>
                                <div>
                                I'm a product manager who left to
                                pursue a career in data science. I'm
                                currently attending Flatiron's Data
                                Science Bootcamp and will graduate in July.
                                </div>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="slide">
                        <div className="card contact-card">
                            <h1>Contact</h1>
                            <p>I'm open to coffee, networking, exciting opportunities, cool tech projects, or fun facts about ducks!</p>
                            <p>Email me at: <a href="mailto:wbennett711@gmail.com">wbennett711@gmail.com</a></p> 
                        </div>
                </li>
            </ul>
        </div>
    </div>
    );
};

export default Home;