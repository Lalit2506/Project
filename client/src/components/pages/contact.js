import React from "react";

const p = {
    color: 'Red',
    height: '50px',
    fontSize: '150%',
    backgroundColor: 'yellow'
}

function Contact () {
    return (
    <header>
    <br/>
    <br/>
    <h1> Contact Us </h1>
    <div style = {p}>For Contacting Moe:<a href="mailto: 200387536@georgianc.on.ca">200387536@georgianc.on.ca</a></div>
    <div style = {p}>For Contacting Lalit: <a href="mailto: 200395019@georgianc.on.ca">200395019@georgianc.on.ca</a></div>
    <div style = {p}>For contacting Noor: <a href="mailto: Noor.Chaudhary@georgianc.on.ca">Noor.Chaudhary@georgianc.on.ca</a></div>
    <div style = {p}>For contacting Steven: <a href="mailto: Stevencaird89@gmail.com">Stevencaird89@gmail.com</a></div>
    </header>
    )
}

export default Contact;