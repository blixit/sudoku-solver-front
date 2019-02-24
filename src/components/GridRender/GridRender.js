import React, { Component } from 'react';
import {Button, Icon} from 'react-materialize';
import axios, {post} from 'axios';
import './GridRender.css';

class GridRender extends Component {

  constructor(props) {
    super(props);
    this.state = {
      grid: props.grid,
      label: props.label
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      grid: props.grid,
      label: props.label || this.state.label
    });
  }

  render() {
    let grid = null;
    
    if (this.state && this.state.grid) {
      const rows = this.state.grid.split("\n");
      grid = <div className="grid">
        <span className="gridlabel">{this.state.label}</span>
        {
          rows.map((row, i) => (
            <div key={'r' + i}>
              {row.split('').map((cellValue, j) => <span key={'c' + j} className="cell">{cellValue}</span>)} <br/>
            </div>
          ))
        }
      </div>
    }

    return (
      <div>
        {grid}
      </div>
    );
  }
}

export default GridRender;