import React from "react";
import CatFact from "./CatFact";

const Contact = () =>{
    
    return(
        <div className="closing">
             <h1>Stay In Touch</h1>
            <p>Any Questions? Hit me up. How about starting to build something incredible together?</p>
            <p>Random Cat fact for you today: <CatFact /> </p>
            <hr/>
            <div className="subscribe">
                <input type="email" placeholder="Enter your email address"/>
                <button>Let's Talk</button>
            </div>
        </div>
    )

}

export default Contact;