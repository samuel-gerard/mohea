import Thead from "./thead.jsx";
import Tbody from "./tbody.jsx";
import Tfoot from "./tfoot.jsx";
import React, {Component} from "react";
import axios from 'axios';
import { connect } from "react-redux";
import TableReturn from "./tableReturn.jsx";
import { loadTable, addNewRow, addNewCol, importFile, resetTable, updateCaption, updateName, updateClasses, updateNbCol } from "../redux/actions";
import * as d3 from "d3";
import { ImportFile } from "../../../components/ImportFile";
import { SaveProject } from "../../../components/SaveProject";
import CustomInput from "./CustomInput";

class Table extends Component {
  constructor(props) {
    super(props);

    // State to init an empty table
    this.state = {
      heightCol: 0,
      widthCol: 0,
    }
  }

  componentWillMount() {
    const href = window.location.href;
    const id = href.substring(href.lastIndexOf('/') + 1)

    if( ! parseInt(id, 10) ) {
      return;
    }
    
    axios({
        method: 'GET',
        url: window.location.origin + '/project/' + id,
      })
      .then(res => {
        if(res.status === 200) {
          const data = res.data;
          const table = JSON.parse(data.content);
          this.props.loadTable(id, table.classes, table.nbCol, table.content, data.caption, data.name);
        }
      })
      .catch(err => {
        window.location.replace(window.location.origin + '/error');
      })
  }
  /* ===============================================
  * DELETE FUNCTIONS
  =============================================== */
  // Delete all the table
  handleReset = () => {
    this.props.resetTable();
  }

  // Add a new column to all the table
  handleDeleteCol = () => {
    this.props.deleteCol();
  }

  handleCaption = (e) => {
    this.props.updateCaption(e.target.value);
  }

  handleName = (e) => {
    this.props.updateName(e.target.value);
  }

  handleInitialize = (e) => {
    e.preventDefault();

    for(var i = 0; i < this.state.heightCol; i ++) {
      const type = i === 0 ? 'head' : 'body';
      this.props.addRow(type, i);
    }

    for(var i = 1; i < this.state.widthCol; i ++) {
      this.props.addCol(i);
    }
  }

  updateWidthCol = (e) => {
    this.setState({
      widthCol: e.target.value
    })
  }

  updateHeightCol = (e) => {
    this.setState({
      heightCol: e.target.value
    })
  }

  handleClasses = (e) => {
    this.props.updateClasses(e.target.value);
  }

  
  importFile = () => {

    const file = document.getElementById('import-file').files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const typeFileSelected = document.querySelector('input[name="type-imported"]:checked');
      let data;

      if(typeFileSelected === null) {
        alert('You need to select a file type !');
        return;
      }

      switch(typeFileSelected.value) {
        case "CSV":
          data = d3.dsvFormat(';').parse(reader.result)
          break;
        case "JSON":
          data = JSON.parse(reader.result);
          data['columns'] = Object.keys(data[0]);
      }

      let tableImported = { 'head': [], 'body': [], 'foot': []}

      data.forEach((el, i) => {
        if(i === data.length) {
          return;
        }
        const rowBody = Object.values(el).map(val => {
          return { 'value': val }
        })
        tableImported['body'].push(rowBody)
      });

      const rowHead = data['columns'].map(val => {
        return { 'value': val }
      })
      tableImported['head'].push(rowHead);

      this.props.importFile(tableImported);
      this.props.updateNbCol(data['columns'].length)
      
    }
    if(file) {
      reader.readAsBinaryString(file);
    }
  }

  /* ===============================================
  * DISPLAY COMPONENT
  =============================================== */
  render() {
    const tableClasses = this.props.classes.join(' ')

    return <section>
        <h1>{this.props.name || 'New table'}</h1>
        <p className="card bg-warning p-2">Be careful, merging cells is not advised in accessibility. Therefore, you will not be able to perform this action.</p>
        {this.props.tableau.head.length === 0 && this.props.tableau.body.length === 0 && this.props.tableau.foot.length == 0 &&
          <div className="card bg-dark text-white p-2">
            <div className="row">
              <div className="col-md-6">
                <h4 className="card-title">Generate a table</h4>
                <form onSubmit={this.handleInitialize}>
                  <div className="flex">
                    <input type="number" onChange={this.updateWidthCol} value={this.widthCol} max="16" />
                    <span>x</span>
                    <input type="number" onChange={this.updateHeightCol} value={this.heightCol} max="16" />
                  </div>
                  <input type="submit" value="Generate table" />
                </form>
              </div>
              <ImportFile func={this.importFile} className="col-md-6" />
            </div>
          </div>
        }
        <SaveProject content={this.props.tableau} classes={this.props.classes} caption={this.props.caption} nbCol={this.props.nbCol} name={this.props.name} type="table" />
        <CustomInput />
        <div className="row">
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="table-name">
                Name for this table
              </label>
              <input type="text" className="form-control" name="name" id="table-name" onChange={this.handleName} value={this.props.name} />
            </div>
            <div className="form-group">
              <label htmlFor="table-caption">
                Caption for this table
              </label>
              <input type="text" className="form-control" name="caption" id="table-caption" onChange={this.handleCaption} value={this.props.caption} />
            </div>
            <div className="form-group card p-2 bg-info text-white">
              <h4>Table global style</h4>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="class-style" onChange={this.handleClasses} value="table" />
                <label className="form-check-label" htmlFor="class-style">With bootstrap initial style</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="class-striped" onChange={this.handleClasses} value="table-striped" />
                <label className="form-check-label" htmlFor="class-striped">Striped</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="class-dark" onChange={this.handleClasses} value="table-dark" />
                <label className="form-check-label" htmlFor="class-dark">Dark</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="class-bordered" onChange={this.handleClasses} value="table-bordered" />
                <label className="form-check-label" htmlFor="class-bordered">Bordered</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="class-hover" onChange={this.handleClasses} value="table-hover" />
                <label className="form-check-label" htmlFor="class-hover">Hover</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="class-responsive" onChange={this.handleClasses} value="table-responsive" />
                <label className="form-check-label" htmlFor="class-responsive">Responsive</label>
              </div>
            </div>
            <div className="form-group d-flex justify-content-between">
              <input type="button" className="w-25 btn btn-primary" value="Reset" onClick={this.handleReset} />
            </div>
          </div>
          <div className="col-md-9">
            <table className={tableClasses}>
                <Thead />
                <Tbody />
                <Tfoot />
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <TableReturn />
          </div>
        </div>
      </section>
  }
}

const mapStateToProps = state => {
  return {
    tableau: state.tableau,
    name: state.name,
    nbCol: state.nbCol,
    caption: state.caption,
    classes: state.classes,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadTable: (id, classes, nbCol, tableau, caption, name) => {
      dispatch(loadTable(id, classes, nbCol, tableau, caption, name));
    },
    updateCaption: caption => {
      dispatch(updateCaption(caption))
    },
    updateName: name => {
      dispatch(updateName(name))
    },
    updateClasses: classe => {
      dispatch(updateClasses(classe))
    },
    resetTable: () => {
      dispatch(resetTable())
    },
    addRow: (type, idx) => {
      dispatch(addNewRow(type, idx))
    },
    addCol: (idx) => {
      dispatch(addNewCol(idx))
    },
    importFile: (data) => {
      dispatch(importFile(data))
    },
    updateNbCol: (number) => {
      dispatch(updateNbCol(number))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
