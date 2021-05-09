import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import JobList from './components/JobList';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

function App() {

  return (
    <Router>
      <>
      <Nav></Nav>
      <main>
        <Switch>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
          <Route path="/" component={About} />
        </Switch>
      </main>
      </>
    </Router>
    
  );
}

export default App;