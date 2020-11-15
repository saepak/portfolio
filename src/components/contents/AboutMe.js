import { Container } from '@material-ui/core'
import React from 'react'


const AboutMe = () => {
    return (
        <Container className="subBox" maxWidth="md">
            <div className="aboutMeBox">
                <h1 className="subTitle">About Me</h1>
                <div className="aboutMeDetail">
                    <h3>Hi, I’m Saebyeol Pak</h3>
                    <p>Detail-oriented front-end developer, friendly team player and self-motivated person. +3 years experience in building websites and web applications with a multitude of clients. Love collaboration and continually work on improving my skills. I / I am...</p>

                    <ul>
                        <li>experienced in implementing responsive, cross-browser web projects using HTML5 and CSS3.</li>
                        <li>have hands-on experience in building web applications with React.js, Rest API and StyledComponents(Material-UI).</li>
                        <li>familiar with using source control software (Git).</li>
                    </ul>
                    <p>I look forward to speaking with you soon.</p>
                </div>
            </div>
        </Container>
    )
}

export default AboutMe