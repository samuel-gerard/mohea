import Tbody from "./tbody.jsx";
import Thead from "./thead.jsx";
import React, {Component} from "react";
import { connect } from "react-redux";


class Table extends Component {
  /* ===============================================
  * DELETE FUNCTIONS
  =============================================== */
  constructor(props) {
    super(props)
    console.log(this.props);
  }

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
            <div className="form-group">
              <input type="button" className="btn btn-secondary mr-1" value="Col -" onClick={this.handleDeleteCol} />
              <input type="button" className="btn btn-secondary" value="Col +" />
            </div>
          </div>
          <div className="col-md-9">
            {/* <input type="button" value="Row Head +" onClick={() => this.handleAddRow('head')} />
            {/* <input type="button" value="Row Body +" onClick={() => this.handleAddRow('body')} />
            <input type="button" value="Row Footer +" onClick={() => this.handleAddRow('footer')} /> */}
            <table>
                <Thead/>
                <Tbody/>
            </table>
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
