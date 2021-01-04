import React, {useEffect} from 'react'
import { Container, Button } from '@material-ui/core'
import resume from './../../img/resume.pdf'


const AboutMe = () => {

    return (
        <Container className='subBox' maxWidth='md'>
            <div className='aboutMeBox'>
                <h1 className='subTitle'>About Me</h1>
                <div className='aboutMeDetail'>
                    <h3>Hi, I’m Sae Pak, Vancouver based front-end developer.</h3>
                    <p>Since starting my journey as a front-end developer, I have enjoyed the process of making web projects that are easy to use and accessible to all. I love to learn new technology and keep track of lessons learned.</p>
                    <br></br>
                    <p>I / I am...</p>

                    <ul>
                        <li>experienced in implementing responsive, cross-browser web products.</li>
                        <li>have hands-on experience in building websites and web apps with React.js, Rest API and UI framework.</li>
                        <li>familiar with using source control software.</li>
                        <li>have a good understanding of wireframes and user Experience.</li>
                    </ul>
                    <p>Find out more about me!</p>

                    <div className='btnWrapper'>
                        <Button 
                            className='btnP' 
                            variant='contained'
                            onClick={()=> window.open(resume)}
                        >
                            Download Resume
                        </Button>
                    </div>

                </div>
            </div>
        </Container>
    )
}

export default AboutMe