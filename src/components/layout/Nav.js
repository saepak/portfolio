import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Container, AppBar, Paper, Tabs, Tab, Typography, Box } from '@material-ui/core';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import DevicesOutlinedIcon from '@material-ui/icons/DevicesOutlined';
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';
import AboutMe from '../contents/AboutMe'
import Contact from '../contents/Contact'
import Resume from '../contents/Resume'
import Work from '../contents/Work'

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>{children}</Box>
        )}
      </div>
    );
  }
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    indicator: {
        backgroundColor: '#151634'
    }
}));



const Nav = () => {
    
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <div className="navBox">
            <div className="navigation">
                <Container maxWidth="md">

                    <AppBar style={{width:'100%'}} position="static">
                        <Tabs 
                            value={value} 
                            indicatorColor="inherit"
                            onChange={handleChange} 
                            className={classes.indicator}
                        >
                            <Tab className="tabStyle" icon={<AccountCircleOutlinedIcon />} {...a11yProps(0)}/>
                            <Tab className="tabStyle" icon={<AssignmentIndOutlinedIcon />} {...a11yProps(1)} />
                            <Tab className="tabStyle" icon={<DevicesOutlinedIcon />} {...a11yProps(2)} />
                            <Tab className="tabStyle" icon={<PhoneInTalkOutlinedIcon />} {...a11yProps(3)} />

                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <AboutMe/>
                    </TabPanel>
                    <TabPanel value={value} index={1} >
                        <Resume />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                       <Work />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                       <Contact />
                    </TabPanel>
                </Container>
            </div>
        </div>
    )
}

export default Nav
