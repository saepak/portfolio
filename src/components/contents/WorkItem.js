import React from 'react'
import { Data } from './Data'
import { Container } from '@material-ui/core';

const WorkItem = ({match}) => {

    let id = match.params.id -1;
    const [ data, setData ] = React.useState(Data[id]);

    return (
        <Container className="subBox" maxWidth="md">
            <div className="workItemBox">
                <h3>{data.title}</h3>
                <div>{data.skill}</div>
            </div>
        </Container>
    )
}

export default WorkItem