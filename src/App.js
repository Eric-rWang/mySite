import React from 'react';
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import about from "./components/about";
import work from "./components/work";
import food from "./components/food";
import './App.css';
import photography from './components/photography';
import coding from './components/coding';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="navBarAll">
      <Navbar className="navBar">
        <Navbar.Brand id="nameFC">
          e r i c    w a n g
        </Navbar.Brand>
        <div className="navBorder">
          <Nav className="navHome" id="navOptions">
            <Link className="navText" to="/" style={{ textDecoration: 'none'}}> 
              Home
            </Link>
            <Link className="navTextWork" to="/work" style={{ textDecoration: 'none'}}>
              Work
            </Link>
          </Nav>
        </div>
      </Navbar>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={about} exact />
        <Route path="/work" component={work} exact />
        <Route path="/food" component={food} exact />
        <Route path="/photography" component={photography} exact />
        <Route path="/coding" component={coding} exact />
      </Switch>
    </div>
  );
}

export default App;
