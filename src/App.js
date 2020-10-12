import React from 'react';
import './App.css';
import Nav from './components/layout/Nav'
import AboutMe from './components/contents/AboutMe'
import Resume from './components/contents/Resume'
import Work from './components/contents/Work'
import Contact from './components/contents/Contact'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className="App">
          <Header />
          <Nav />
          <Switch>
            <Router path="/AboutMe" component={AboutMe}>
              <AboutMe/>
            </Router>
            <Router path="/Resume" component={Resume}>
              <Resume/>
            </Router>
            <Router path="/Work" component={Work}>
              <Work/>
            </Router>
            <Router path="/Contact" component={Contact}>
              <Contact/>
            </Router>
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
