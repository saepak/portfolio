import { Container } from '@material-ui/core'
import React from 'react'


const AboutMe = () => {
    return (
        <Container className="subBox" maxWidth="md">
            <div className="aboutMeBox">
                <h1 className="subTitle">About Me</h1>
                <div className="aboutMeDetail">
                    <h3>Hi, I’m Saebyeol Pak, Vancouver based front-end developer. </h3>
                    <p>Since beginning my journey as a developer, I've worked on web projects to meet customer satisfaction. I / I am..</p>

                    <ul>
                        <li>experienced in implementing responsive, cross-browser UI/UX designs using HTML and CSS.</li>
                        <li>have hands-on experience in building web applications with React.js, Rest API and StyledComponents(Material-UI).</li>
                        <li>familiar with using source control software (Git).</li>
                        <li>able to work closely with designers and project managers.</li>
                    </ul>
                    <p>I'm a well-organised, collaborative person and I get excited about learning new technologies.
I’m open for new opportunities! </p>
                </div>
            </div>
        </Container>
    )
}

export default AboutMe