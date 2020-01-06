import Thead from "./thead.jsx";
import Tbody from "./tbody.jsx";
import Tfoot from "./tfoot.jsx";
import React, {Component} from "react";
import { connect } from "react-redux";
import TableReturn from "./tableReturn.jsx";
import { addNewRow, addNewCol, resetTable, updateCaption, updateName } from "../redux/actions";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heightCol: 0,
      widthCol: 0
    }
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

  /* ===============================================
  * Get JSON about this table
  =============================================== */
  handleGenerate = () => {
    console.log(this.props)
  }
  /* ===============================================
  * DISPLAY COMPONENT
  =============================================== */
  render() {
    return <section>
        <h1>{this.props.name || 'New table'}</h1>
        <p className="card bg-warning p-2">Be careful, merging cells is not advised in accessibility. Therefore, you will not be able to perform this action.</p>
        {this.props.tableau.head.length === 0 && this.props.tableau.body.length === 0 && this.props.tableau.foot.length == 0 &&
          <div className="card bg-dark text-white p-2">
            <h4 className="card-title">Generate a table</h4>
            <form onSubmit={this.handleInitialize}>
              <div className="flex">
                <input type="number" onChange={this.updateWidthCol} value={this.widthCol} />
                <span>x</span>
                <input type="number" onChange={this.updateHeightCol} value={this.heightCol} />
              </div>
              <input type="submit" value="Generate table" />
            </form>
          </div>
        }
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
            <div className="form-group d-flex justify-content-between">
              <input type="button" className="btn btn-primary form-control mr-1" value="Display code" onClick={this.handleGenerate} />
              <input type="button" className="w-25 btn btn-primary" value="Reset" onClick={this.handleReset} />
            </div>
          </div>
          <div className="col-md-9">
            <table className="table table-bordered">
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
    caption: state.caption,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCaption: caption => {
      dispatch(updateCaption(caption))
    },
    updateName: name => {
      dispatch(updateName(name))
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
