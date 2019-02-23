import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Button, Icon} from 'react-materialize';
import logo from './logo.svg';
import './App.css';
import StringGridPage from './pages/string-grid/StringGridPage';
import FileGridPage from './pages/file-grid/FileGridPage';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <div className="Menu">
              <span className="MenuItem"><Link to="/">Sudoku Solver</Link></span>
              <span className="MenuItem"><Link to="/solve/string">Import a file</Link></span>
              <span className="MenuItem"><Link to="/solve/file">Write your grid</Link></span>
            </div>
            <Route exact path="/" component={Home} />
            <Route path="/solve/string" component={StringGridPage} />
            <Route path="/solve/file" component={FileGridPage} />
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
              <Link to="/solve/file">
                <Button waves="light">
                  Import a sdk grid
                </Button>
              </Link>
            {/* <a target="_blank" rel="noopener noreferrer" href="http://www.sudocue.net/fileformats.php">?</a> */}
          </header>
  </div>
);

export default App;

// http://localhost:8000/api/sudoku/solver/string
