import React from 'react'
import { Container, Grid, Button, Typography } from '@material-ui/core';
import { Data } from './Data'
import { Link } from 'react-router-dom'



const Work = () => {

    const [ data, setData ] = React.useState(Data);
  
    return (
        <Container className="subBox" maxWidth="md">
            <div className="workBox">
                <h1 className="subTitle">Work</h1>
                <Grid container spacing={2}>
                    
                    {data.map((item)=> (
                        <Grid item xs={12} sm={4}>
                            <div className="workItem">
                                <Link to={`/Work/${item.id}`}>
                                    <Button className="workItemBtn">
                                        {/* <img className="workItemBg" src={item.bg}/> */}
                                        <Typography class="workItemTitle">{item.title}</Typography>
                                    </Button>
                                </Link>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Container>
    )
}

export default Work