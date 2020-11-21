import React from 'react'
import { Container, Grid, Typography, Card, CardContent } from '@material-ui/core';
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
                            <Card className="cardBox">
                                <CardContent>
                                    <Typography className="typo cardTitle" variant="h6" component="h3">
                                        {item.title}
                                    </Typography>
                                    <Typography className="typo cardDesc" color="textSecondary">
                                        {item.desc}
                                    </Typography>
                                </CardContent>
                                <div className="linkBtn">
                                    <Link to={`/Work/${item.id}`}>
                                        <Typography class="workItemTitle">Learn More</Typography>
                                    </Link>
                                </div>
                            </Card>
                        </Grid>
                    ))}
                    
                </Grid>
            </div>
        </Container>
    )
}

export default Work