import Thead from "./thead.jsx";
import Tbody from "./tbody.jsx";
import Tfoot from "./tfoot.jsx";
import React, { Component } from "react";
import axios from 'axios';
import { connect } from "react-redux";
import TableReturn from "./tableReturn.jsx";
import BootstrapReturn from "../../../components/BootstrapReturn";
import { loadTable, addNewRow, addNewCol, importFile, resetTable, undoAction, redoAction, updateCaption, updateName, updateClasses, updateNbCol } from "../redux/actions";
import * as d3 from "d3";
import { ImportFile } from "../../../components/ImportFile";
import { SaveProject } from "../../../components/SaveProject";
import { Canceller } from "../../../components/Canceller";
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

  componentDidMount() {
    const href = window.location.href;
    const id = href.substring(href.lastIndexOf('/') + 1)

    if (!parseInt(id, 10)) {
      return;
    }

    axios({
      method: 'GET',
      url: window.location.origin + '/project/' + id,
    })
      .then(res => {
        if (res.status === 200) {
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

    for (var i = 0; i < this.state.heightCol; i++) {
      const type = i === 0 ? 'head' : 'body';
      this.props.addRow(type, i);
    }

    for (var i = 1; i < this.state.widthCol; i++) {
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

      if (typeFileSelected === null) {
        alert('You need to select a file type !');
        return;
      }

      switch (typeFileSelected.value) {
        case "CSV":
          data = d3.dsvFormat(';').parse(reader.result)
          break;
        case "JSON":
          data = JSON.parse(reader.result);
          data['columns'] = Object.keys(data[0]);
      }

      let tableImported = { 'head': [], 'body': [], 'foot': [] }

      data.forEach((el, i) => {
        if (i === data.length) {
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
    if (file) {
      reader.readAsBinaryString(file);
    }
  }

  /* ===============================================
  * DISPLAY COMPONENT
  =============================================== */
  render() {
    const tableClasses = this.props.classes.join(' ')

    return <section>
      <nav id="header" className="header min show-logo">
        <ul className="d-flex jc-e ai-c">
          <li className="new"><SaveProject content={this.props.tableau} classes={this.props.classes} caption={this.props.caption} nbCol={this.props.nbCol} name={this.props.name} type="table" /></li>
          <li className="no-padding"><Canceller undoAction={this.props.undoAction} redoAction={this.props.redoAction} /></li>
          <li className="logo ml-auto mr-auto"><a href="/"><img src="/images/logo_medium.png" alt="Logo of Mohea" draggable="false" /></a></li>
          <li><a className="link primary" href="/dashboard">Your dashboard</a></li>
        </ul>
      </nav>
      <main className="padding-bottom">
        <div className="form-group title">
          <label htmlFor="table-name">Name of the table</label>
          <input type="text" className="form-control form-control-lg h1 bold" name="name" id="table-name" onChange={this.handleName} value={this.props.name || 'New table'} />
        </div>
        <div className="form-group title">
          <label htmlFor="table-caption">Caption</label>
          <input type="text" className="form-control" name="caption" id="table-caption" onChange={this.handleCaption} value={this.props.caption} />
        </div>
        <div className="form-group title ta-center">
          <div className="custom-control custom-switch form-control-with-margin">
            <input className="custom-control-input" type="checkbox" id="class-style" onChange={this.handleClasses} value="table" checked={this.props.classes.find(el => el === 'table') ? 'checked' : false} />
            <label className="custom-control-label" htmlFor="class-style">With Bootstrap initial style</label>
          </div>
          <div className="form-check form-check-inline form-control-with-margin">
            <input className="form-check-input" type="checkbox" id="class-striped" onChange={this.handleClasses} value="table-striped" checked={this.props.classes.find(el => el === 'table-striped') ? 'checked' : false} />
            <label className="form-check-label" htmlFor="class-striped">Striped</label>
          </div>
          <div className="form-check form-check-inline form-control-with-margin">
            <input className="form-check-input" type="checkbox" id="class-dark" onChange={this.handleClasses} value="table-dark" checked={this.props.classes.find(el => el === 'table-dark') ? 'checked' : false} />
            <label className="form-check-label" htmlFor="class-dark">Dark</label>
          </div>
          <div className="form-check form-check-inline form-control-with-margin">
            <input className="form-check-input" type="checkbox" id="class-bordered" onChange={this.handleClasses} value="table-bordered" checked={this.props.classes.find(el => el === 'table-bordered') ? 'checked' : false} />
            <label className="form-check-label" htmlFor="class-bordered">Bordered</label>
          </div>
          <div className="form-check form-check-inline form-control-with-margin">
            <input className="form-check-input" type="checkbox" id="class-hover" onChange={this.handleClasses} value="table-hover" checked={this.props.classes.find(el => el === 'table-hover') ? 'checked' : false} />
            <label className="form-check-label" htmlFor="class-hover">Hover</label>
          </div>
          <div className="form-check form-check-inline form-control-with-margin">
            <input className="form-check-input" type="checkbox" id="class-responsive" onChange={this.handleClasses} value="table-responsive" checked={this.props.classes.find(el => el === 'table-responsive') ? 'checked' : false} />
            <label className="form-check-label" htmlFor="class-responsive">Responsive</label>
          </div>
        </div>
        <CustomInput />
        {this.props.tableau.head.length === 0 && this.props.tableau.body.length === 0 && this.props.tableau.foot.length == 0 &&
          <div className="card-content">
            <div className="row">
              <div>
                <h3 className="card-title">Generate a table</h3>
                <form onSubmit={this.handleInitialize}>
                  <div className="d-flex ai-c">
                    <input type="number" className="form-control" onChange={this.updateWidthCol} value={this.widthCol} min="1" max="16" />
                    <span className="ml-10 mr-10">×</span>
                    <input type="number" className="form-control" onChange={this.updateHeightCol} value={this.heightCol} min="1" max="16" />
                  </div>
                  <button type="submit" className="button primary form-control-with-big-margin d-block">Generate table</button>
                </form>
              </div>
              <ImportFile func={this.importFile} />
            </div>
          </div>
        }
        <div className="sandbox">
          <h2 className="h1 bold ta-center">Sandbox</h2>
          <table className={tableClasses}>
            <Thead />
            <Tbody />
            <Tfoot />
          </table>
        </div>
        <TableReturn />
      </main>
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
    undoAction: () => {
      dispatch(undoAction())
    },
    redoAction: () => {
      dispatch(redoAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
