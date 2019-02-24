import React, { Component } from 'react';
import {Button, Row, Input, Icon} from 'react-materialize';
import Api from '../../services/Api';
import GridRender from '../../components/GridRender/GridRender';

class FileGridPage extends Component {
  // grid container css
  gridContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  };

  constructor(props) {
    super(props);
    this.api = new Api();
    this.state = {
      url: this.url,
      file: null,
      initialGrid: <GridRender grid={null} ></GridRender>,
      solvedGrid: <GridRender grid={null} ></GridRender>
    }
  }

  onChange(e)
  {
    this.setState({
      file: e.target.files[0],
      initialGrid: null,
      solvedGrid: null,
      error: ''
    })
  }

  submit()
  {
    if (! this.state.file) {
      alert('You need to select a file');
      return;
    }

    const form = new FormData();
    form.append('file', this.state.file);

    return this.api.postFile(form)
      .then(response => {
        const data = response.data;
        debugger;
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
        <div>
          <Row>
            <p>Import a sdk file. To know more about this format, refer to <a target="_blank" rel="noopener noreferrer" href="http://www.sudocue.net/fileformats.php">Sudocue</a></p>
            <Input type="file" label="File" s={12} name="file" onChange={(e)=>this.onChange(e)}  />

            <Button type="submit" waves="light" onClick={()=>this.submit()}>
              Solve sdk grid
            </Button>
          </Row>
        </div>
        <div className="grids" style={this.gridContainer}>
          <div>{this.state.initialGrid}</div>
          <div>{this.state.solvedGrid}</div>
        </div>
        {
          this.state.error ? (<div className="Error">
            {this.state.error}
          </div>) : ''
        }
        
        {/* HELP SECTION */}
        <div>
          <h5>HELP</h5>
          <p>
            This program only accept these following ordered parameters: A, D, B and P. <br/>
            P is our custom parameter to define the position where we want to start the resolution. It should be set at (0,0).<br/>
            Example:
          </p>
          <p>
            #ABlixit<br/>
            #DDescription<br/>
            #B22-02-2019<br/>
            #P0 0<br/>
            1...3.59.<br/>
            3..5...2.<br/>
            .5.9.2638<br/>
            43.......<br/>
            ...6.1...<br/>
            .......87<br/>
            6473.8.5.<br/>
            .1...5..9<br/>
            .92.7...3<br/>
          </p>
        </div>
      </div>
    );
  }
}

export default FileGridPage;