import React from "react";
import developer from "../images/me.png"

const Intro =() => {
    return(

        <div className="intro" >
            <div class="text">
                <h1>I'm Developer</h1>
                <h2>Alex Mwai Muthee</h2>
                <p>A magician crafting eye-catching, user-loved things</p>
                
            </div>
            <img src={developer} alt="The developer" ></img>
        </div>
    )
}

export default Intro;