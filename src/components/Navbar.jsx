import React from "react";

const Navbar =() =>{
    return(
        <div className="nav">
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#contact" class="hire-me">Hire Me</a></li>
                </ul>
             </nav>
    
        </div>
    );


};

export default Navbar;