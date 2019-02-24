import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Button, Icon} from 'react-materialize';
import logo from './sudoku.png';
// import logo from './logo.svg';
import './App.css';
import StringGridPage from './pages/string-grid/StringGridPage';
import FileGridPage from './pages/file-grid/FileGridPage';
import Navbar from 'react-materialize/lib/Navbar';
import NavItem from 'react-materialize/lib/NavItem';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <div className="Menu">
              <Navbar left>
                <NavItem href="/">Sudoku Solver</NavItem>
                <NavItem href="/solve/file">Import a file</NavItem>
                <NavItem href="/solve/string">Write your grid</NavItem>
              </Navbar>
              {/* <span className="MenuItem"><Link to="/">Sudoku Solver</Link></span> */}
              {/* <span className="MenuItem"><Link to="/solve/file">Import a file</Link></span> */}
              {/* <span className="MenuItem"><Link to="/solve/string">Write your grid</Link></span> */}
            </div>
            <div className="Content">
              <Route exact path="/" component={Home} />
              <Route path="/solve/string" component={StringGridPage} />
              <Route path="/solve/file" component={FileGridPage} />
            </div>
          </div>
        </Router>
    );
  }
}

const Home = () => (
  <div className="App">
      <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Welcome to the sudoku solver !
            </p>
              <Link to="/solve/string">
                <Button waves="light">
                  Write a grid
                </Button>
              </Link>
              <br/>
              <Link to="/solve/file">
                <Button waves="light">
                  Import a sdk grid
                </Button>
              </Link>
          </header>
  </div>
);

export default App;
