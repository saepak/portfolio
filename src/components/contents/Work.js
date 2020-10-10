import React,{useState} from 'react'
import { Grid, Button, Typography } from '@material-ui/core';
import {Data} from './Data';

const Work = () => {

    const [data, setData] = React.useState(Data);
    
    return (
        <div className="workBox">
            <h1 className="subTitle">Work</h1>
            <Grid container spacing={2}>
                
                {data.map((item)=> (
                    <Grid item xs={12} sm={4}>
                        <div className="workItem">
                            <Button className="workItemBtn">
                                <Typography class="workItemTitle">{item.title}</Typography>
                            </Button>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Work