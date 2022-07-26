import React from "react";
import Links from "./Links";

function About({bio, link}) {
  
  console.log(bio)
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio.length < 1 ?  null : <p>{bio}</p> }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links link={link}/>
    </div>
  );
}

export default About;
