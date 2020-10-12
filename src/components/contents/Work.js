import React,{ useState } from 'react'
import { makeStyles, Container, Grid, Button, Typography, Modal } from '@material-ui/core';
import {Data} from './Data';



const Work = () => {

    const [data, setData] = React.useState(Data);
  
    return (
        <Container className="subBox" maxWidth="md">
            <div className="workBox">
                <h1 className="subTitle">Work</h1>
                <Grid container spacing={2}>
                    
                    {data.map((item)=> (
                        <Grid item xs={12} sm={4}>
                            <div className="workItem">
                                <Button className="workItemBtn">
                                    {/* <img className="workItemBg" src={item.src}/> */}
                                    <Typography class="workItemTitle">{item.title}</Typography>
                                </Button>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Container>
    )
}

export default Work