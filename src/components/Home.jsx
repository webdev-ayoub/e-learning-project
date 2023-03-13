import React from "react";
import NavBar from "./NavBar";
import circles from "../assets/circles.png"
import "../styles/home.css"
import student from "../assets/student.png"
import partenaire from "../assets/partenaire.png"
const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="hero">
                <div className="main-section">
                    <div className="section1">
                        <img className="home-circle" src={circles} alt="circle" />
                        <div className="slogan">
                            <h1>Up Your <span>Skills</span> To <span>Advance</span> Your <span>Career</span> Path</h1>
                            <p>Provides you with the latest online learning system and material that help your knowledge growing.</p>
                            <div>
                                <button className="slogan-btn">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="section2">
                        <div className="empty-circle"></div>
                        <img src={student} alt="student" />
                    </div>
                </div>
                <div className="section3">
                    <img src={partenaire} alt="udemy" />
                </div>
            </div>

        </div>
    );
};

export default Home;
