import React from "react";
import Laptop from "../images/laptop.jpg"

const Aboutme =() =>{
    return(
        <div className="about-me">
             <h1>About Me</h1>
            <h3>I am a Full-stack developer dedicated to enhancing individuals' lives through engaging digital interactions.</h3>
           
            <div className="about-content">
                <div className="about-text">
                    <div className="p-text">
                        <h2>Developing With A Passion While Exploring The World.</h2>
                        <p>I'm a fourth-year student at Strathmore University, deeply passionate about technology. Coding is my forte, and I find joy in working with various technologies, including Python for AI, React and Express/Node for web apps, Laravel for backend development, and Java. My journey in IT includes significant experience working on a major government project, which has given me practical insights and skills.

                            I love the challenge of creating intelligent systems, especially in the intersection of AI and IoT. The dynamic nature of technology excites me, and I stay engaged with the latest trends and advancements. Being part of the tech world allows me to continuously learn and apply my knowledge to real-world problems.
                            
                            Whether it's developing smart solutions, contributing to open-source projects, or networking with professionals in the field, I thrive on the opportunities that the tech ecosystem offers. As I navigate through my fourth year and beyond, I'm eager to explore new horizons and contribute to innovative projects that make a meaningful impact.</p>
                    </div>
                </div>
                <div className="laptop-image" >
                   
                   <img src={Laptop} alt="Laptop" />

                </div>
               
            </div>
        </div>
    )
}


export default Aboutme;