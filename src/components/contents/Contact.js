import React from 'react'
import { Container, Button } from '@material-ui/core'

const Contact = () => {
    return (
        <Container className="subBox" maxWidth="md">

            <h1 className="subTitle">Contact</h1>
            <div className="contactBtnBox">
                <Button className="contactBtn">
                    <a href="mailto:saebyeolpak@gmail.com" className="btnBg">E-mail</a>
                </Button>
                <Button className="contactBtn">
                    <a href="https://github.com/saebyeolp" target="_blank" className="btnBg">Github</a>
                </Button>
                <Button className="contactBtn">
                    <a href="https://www.linkedin.com/in/saebyeolpak/" target="_blank" className="btnBg">Linkedin</a>
                </Button>
            </div>

        </Container>
    )
}

export default Contact