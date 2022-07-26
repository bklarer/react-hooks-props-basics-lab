import React from "react";

function Links({link}) {
    
    return(
    <>
        <h3>Links</h3>
        <a href={link.github}>{link.github}</a>
        <a href={link.linkedin}>{link.linkedin}</a>
    </>

    );
}


export default Links;