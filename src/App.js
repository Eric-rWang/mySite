import React from 'react';
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import about from "./components/about";
import work from "./components/work";
import './App.css';

function App() {
  return (
    <div className="navBarAll">
      <Navbar className="navBar">
        <Navbar.Brand id="nameFC">
          e r i c  +  w a n g
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
      <Switch>
        <Route path="/" component={about} exact />
        <Route path="/work" component={work} exact />
      </Switch>
    </div>
  );
}

export default App;
