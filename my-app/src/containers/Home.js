import React from "react";
import '../stylesheets/home.css';

const Home = () => {
    return (
    <div class="home">
        <div class="page-wrapper pointer">
            <ul class="slides pointer">
                <li class="slide">
                    <div class="about-me">
                        <img class="profile-image" src="https://i.imgur.com/bGTSg8y.png"/>
                        <div class="header-text">
                            <div class="header-text-center">
                                <h1>Meet Will</h1>
                                <h3>Product Manager</h3>
                                <br/>
                                <div>
                                A vision-driven and detail-oriented leader 
                                with extensive experience defining vision 
                                and strategy to solve company needs for 
                                a portfolio of products.
                                </div>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="slide">
                    <div class="contact">
                        <div class="card contact-card">
                        <h1>Let's chat!</h1>
                        <p>Whether you are interested in career advice or breaking into product management or healthcare.</p>
                        <p>Email me at: <a href="mailto:wbennett711@gmail.com">wbennett711@gmail.com</a></p> 
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    );
};

export default Home;