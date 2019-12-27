import Thead from "./thead.jsx";
import Tbody from "./tbody.jsx";
import Tfoot from "./tfoot.jsx";
import React, {Component} from "react";
import { connect } from "react-redux";
import TableReturn from "./tableReturn.jsx";

class Table extends Component {
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
              <input type="button" className="btn btn-primary form-control mr-1" value="Generate" onClick={this.handleGenerate} />
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
      dispatch({ type: "UPDATE_CAPTION", caption})
    },
    updateName: name => {
      dispatch({ type: "UPDATE_NAME", name})
    },
    resetTable: () => {
      dispatch({type: "RESET_TABLE"})
    },
    deleteCol: () => {
      dispatch({ type: "DELETE_COL"})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
