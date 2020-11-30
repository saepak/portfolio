import React from 'react'
import { Container, Typography } from '@material-ui/core';
import { Data } from './Data'
import { Link } from 'react-router-dom'

const Work = () => {

    const [ data ] = React.useState(Data);
  
    return (
        <Container className='subBox' maxWidth='md'>
            <div className='workBox'>
                <h1 className='subTitle'>Work</h1>
                <div className='workItem'>
                    {data.map((item)=> (
                        <div key={item.id} className='workItemGrid'>
                            <div className='cardBox'>
                                <Typography className={item.group ? 'cardTitle' : 'cardTitle_p'} variant='h6' component='h3'>
                                    {item.title}
                                </Typography>
                                <Typography className='cardDesc' color='textSecondary'>
                                    {item.desc}
                                </Typography>

                                <Link to={`/Work/${item.id}`}>
                                    <Typography class='workItemTitle'>Learn More +</Typography>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='group'>
                    <span>Group Project</span> 
                    <span className='pink'>Personal Project</span> 
                </div>
            </div>
        </Container>
    )
}

export default Work