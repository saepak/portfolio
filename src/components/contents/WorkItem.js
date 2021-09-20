import React from 'react'
import { Data } from './Data'
import { Container, Button, Link } from '@material-ui/core';


const WorkItem = ({match}) => {

    let id = match.params.id -1;
    const [ data ] = React.useState(Data[id]);

    const DisplaySkills = (props) => {
        return (
            <span className='eachSkill'>
                {props.eachSkill}
            </span>
        )
    }

    const DisplayRoles = (props) => {
        return (
            <li>{props.eachRole}</li>
        )
    }

    return (
        <Container className='subBox' maxWidth='md'>
            <div className='workItemBox'>
                 <h3>{data.title}</h3>
                 <div className='desc'>{data.desc}</div>
                {/* {
                    data.demo.length > 1 ? 
                    <div className='link'>
                        <a href={data.demo} target='_blank'>{data.demo}</a>
                    </div> : 
                    ''
                } */}
                <div className='skills'>
                    { data.skills.map((item)=> {
                        return(
                            <DisplaySkills 
                                eachSkill={item.skill}
                            />
                        )
                      })
                    }
                </div>
                <div className='myRole'>
                    <h3>What I did</h3>
                    <ul>
                        { data.roles.map((item)=> {
                            return(
                                <DisplayRoles eachRole={item.role} />
                            )
                         })
                        }
                    </ul>
                </div>
                <div className='btnWrapper'>

                    <Link href={data.demo} target='_blank' style={{textDecoration:'none', marginRight:10}}>
                        {   data.title == 'Kovan' ? 
                            <Button 
                                className='btnP' 
                                variant='contained'
                                >
                                View on Github
                            </Button>
                            :
                            <Button 
                                className='btnP' 
                                variant='contained'
                            >
                                Live Demo
                            </Button>
                        }
                    </Link>

                    <Link href={data.github} target='_blank' style={{textDecoration:'none'}}>
                        {data.group ? '' :
                            <Button 
                                className='btnP' 
                                variant='contained'
                            >
                                View on Github
                            </Button>
                        }
                    </Link>
                </div>

                <div className='workGallery'>
                    <img src={data.pic}/>
                </div>

                
            </div>
        </Container>
    )
}

export default WorkItem