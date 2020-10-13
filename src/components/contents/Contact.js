import React from 'react'
import { Container, Button } from '@material-ui/core'

const Contact = () => {
    return (
        <Container className="subBox" maxWidth="md">
            <div className="contactBox">
                <h1 className="subTitle">Contact</h1>
                <div className="contactBtnBox">
                    <Button className="contactBtn">
                        <span className="btnBg">E-mail</span>
                    </Button>
                    <Button className="contactBtn">
                        <span className="btnBg">Github</span>
                    </Button>
                    <Button className="contactBtn">
                        <span className="btnBg">Linkedin</span>
                    </Button>
                </div>
            </div>
        </Container>
    )
}

export default Contact