import React from 'react'
import { Container } from '@material-ui/core'

const Contact = () => {
    return (
        <Container className="subBox" maxWidth="md">

            <h1 className="subTitle">Contact</h1>
            <div>
                <a href="mailto:saebyeolpak@gmail.com" className="btnBg">
                    <span>E-mail</span>
                </a>
   
                <a href="https://github.com/saebyeolp" target="_blank" className="btnBg">
                    <span>Github</span>
                </a>

                <a href="https://www.linkedin.com/in/saebyeolpak/" target="_blank" className="btnBg">
                    <span>Linkedin</span>
                </a>
            </div>

        </Container>
    )
}

export default Contact