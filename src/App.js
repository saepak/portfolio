import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

/* Component */ 
import Nav from './components/layout/Nav'
import AboutMe from './components/contents/AboutMe'
import Work from './components/contents/Work'
import WorkItem from './components/contents/WorkItem'
import Contact from './components/contents/Contact'
import Splash from './components/layout/Splash'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

/* Css */
import './App.css';
import './reset.css';

const App = () => {

  const Expire = () => {
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setVisible(false);
      }, 3700);
    }, 3700);
  
    return visible ? <Splash /> : ""
  }


  return (
    <Router>
      <div className="App">
          {/* {Expire()} */}
          <Header />
          <Nav />
          <Switch>
            <Route exact path="/" component={AboutMe}>
              <AboutMe/>
            </Route>
            <Route path="/Work" exact component={Work}>
              <Work/>
            </Route>
            <Route path="/Contact" component={Contact}>
              <Contact/>
            </Route>
            <Route path="/Work/:id" component={WorkItem} />
            <Route path="/Splash" component={Splash} />
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
