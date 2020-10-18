import React from 'react'
import { Data } from './Data'
import { Container } from '@material-ui/core';


const WorkItem = ({match}) => {

    let id = match.params.id -1;
    const [ data, setData ] = React.useState(Data[id]);

    const DisplaySkills = (props) => {
        return (
            <span className="eachSkill">
                {props.eachSkill}
            </span>
        )
    }

    return (
        <Container className="subBox" maxWidth="md">
            <div className="workItemBox">
                <h3>{data.title}</h3>
                {
                    data.href.length > 1 ? <div className="link"><a href={data.href} target="_blank">{data.href}</a></div> : <div></div>
                }
                <div className="skills">
                    { data.skills.map((item)=> {
                        return(
                            <DisplaySkills 
                                eachSkill={item.skill}
                            />
                        )
                    })
                  }
                </div>
                <div className="desc">{data.desc}</div>
                <div>
                    <img src={data.pic}></img>
                </div>
            </div>
        </Container>
    )
}

export default WorkItem