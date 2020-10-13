import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

/* Component */ 
import Nav from './components/layout/Nav'
import AboutMe from './components/contents/AboutMe'
import Resume from './components/contents/Resume'
import Work from './components/contents/Work'
import WorkItem from './components/contents/WorkItem'
import Contact from './components/contents/Contact'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

/* Css */
import './App.css';
import './reset.css';

const App = () => {
  return (
    <Router>
      <div className="App">
          <Header />
          <Nav />
          <Switch>
            <Route path="/AboutMe" component={AboutMe}>
              <AboutMe/>
            </Route>
            <Route path="/Resume" component={Resume}>
              <Resume/>
            </Route>
            <Route path="/Work" exact component={Work}>
              <Work/>
            </Route>
            <Route path="/Contact" component={Contact}>
              <Contact/>
            </Route>
            <Route path="/Work/:id" component={WorkItem} />
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
