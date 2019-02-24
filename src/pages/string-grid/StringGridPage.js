import React, { Component } from 'react';
import {Button, Row} from 'react-materialize';
import GridRender from '../../components/GridRender/GridRender';
import Api from '../../services/Api';
import './StringGridPage.css';

class StringGridPage extends Component {
  constructor(props) {
    super(props);
    this.api = new Api();
    this.state = {
      url: this.url,
      gridString: '',
      initialGrid: <GridRender grid={null} ></GridRender>,
      solvedGrid: <GridRender grid={null} ></GridRender>
    }
  }

  onChange(e)
  {
    this.setState({
      gridString: e.target.value,
      error: ''
    });
  }

  submit(e)
  {
    e.preventDefault();

    if (! this.state.gridString) {
      alert('You need type a sudoku string');
      return;
    }

    const form = new FormData();
    form.append('grid', this.state.gridString);

    return this.api.postString(form)
      .then(response => {
        const data = response.data;
        this.setState({
          initialGrid: <GridRender grid={data.grid} label="Initial grid"></GridRender>,
          solvedGrid: <GridRender grid={data.solved} label="Solved grid"></GridRender>
        })
      })
      .catch(error => {
        this.setState({
          error : error.response.data.error
        })
      });
  }

  render() {
    return (
      <div>
        <form>
          <Row>
            <p>Enter 9 lines with digits (1-9) or . for an empty cell.</p>
            <textarea 
              type="textarea" label="Enter a grid"
              className="materialize-textarea" style={{background: 'white', color: 'black'}}
              value={this.state.gridString} onChange={(e)=>this.onChange(e)} />
            <Button type="submit" waves="light" onClick={(e)=>this.submit(e)}>Send the grid</Button>
          </Row>
        </form>
        <div className="gridContainer">
          <div>{this.state.initialGrid}</div>
          <div>{this.state.solvedGrid}</div>
        </div>
        {
          this.state.error ?
            (<div className="Error">
              {this.state.error}
            </div>) : ''
        }
        
      </div>
    );
  }
}

export default StringGridPage;