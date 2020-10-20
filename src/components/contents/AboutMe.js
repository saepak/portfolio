import { Container } from '@material-ui/core'
import React from 'react'


const AboutMe = () => {
    return (
        <Container className="subBox" maxWidth="md">
            <div className="aboutMeBox">
                <h1 className="subTitle">About Me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non dignissim lectus. Maecenas mi lacus, laoreet sed ante vitae, placerat faucibus ante. Aliquam erat volutpat. Praesent fringilla sem id lobortis commodo. Vestibulum purus sem, tristique ac bibendum et, pharetra quis dolor. Proin mollis, lectus id pharetra gravida, eros mi luctus enim, in luctus massa dolor sed mi. Donec rutrum sodales tristique. Cras convallis massa tincidunt metus feugiat sollicitudin. Morbi aliquet arcu sem, at mattis purus gravida eget. In nec ex fringilla, vulputate leo vitae, vulputate est. Cras luctus libero sed aliquam gravida. Nulla id velit a arcu finibus sodales. Duis felis leo, fringilla a nulla sed, fermentum ultricies eros. Aliquam quis bibendum velit. Fusce sodales nibh ac leo vestibulum, vel maximus est mattis.</p>
            </div>
        </Container>
    )
}

export default AboutMe