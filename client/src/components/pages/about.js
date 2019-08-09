import React from "react";

const p = {
    color: 'green',
    height: '50px',
    fontSize: '150%',
    marginTop: '35px',
}

function About () {
    return (
        <header className = "home">
        <br/>
        <br/>
        <h1 style = {p}> About the team </h1>
        <p style = {p}> Lalit: In the fourth Semester of Computer Programming. I wanted to achieve something extra ordinary in this life</p>
        <p style = {p}>Noor: 22 years old, getting married August 10th, aspiring project manager and lifelong learner. </p>
        <p style = {p}>Moe: 27 years old, wanted to become web developer</p>
        <p style = {p}>Steven: I am in fourth Semester. Looking forward to graduate</p>
        </header>
        )
}

export default About;