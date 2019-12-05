import React, {Component} from "react";
import { connect } from "react-redux";
import { addNewRow, addNewCol, deleteCol, deleteRow } from "../redux/actions";

class Thead extends Component {
  constructor(props) {
    super(props)
    console.log('props head', props)
  }

  handleChange = (event) => {
    const split = event.target.id.split('/')
    const col = split[1]
    const row = split[0];
    this.props.items[row][col] = event.target.value
  }

  handleDeleteCol = (e) => {
    this.props.deleteCol(e.target.dataset.col);
  }

  handleAddCol = (e) => {
    this.props.addCol(e.target.dataset.col);
  }

  handleAddRow = (e) => {
    this.props.addRow(e.target.dataset.row);
  }

  handleDeleteRow = (e) => {
    this.props.deleteRow('head', e.target.dataset.row)
  }

  render() {
    const group = Object.values(this.props.tableau.head)
    const groupList = group.length > 0 ? (
      group.map((items, i) => {
        return (
        <tr key={'lineHead' + i}>
          <td>
            <input type="button" onClick={this.handleDeleteRow} data-row={i} className="btn btn-danger" value="Head -" />
            <input type="button" onClick={this.handleAddRow} data-row={i} className="btn btn-secondary" value="Head +" />
          </td>
          {Object.values(items).map((item, j) => {
            return (
              <td key={'head' + j}>
                <input type='text' id={i + '/' + j} onChange={this.handleChange} value={item} />
              </td>
            );
          })}
        </tr>
      )})) : (
        <tr>
          <td>
            <input type="button" onClick={this.handleAddRow} data-row={0} className="btn btn-secondary" value="Head +" />
          </td>
          <td>
            Nothing
          </td>
        </tr>
      );

    const groupHandler = [];
    if(this.props.nbCol > 0) {
      for(var i = 0; i < this.props.nbCol; i++) {
        groupHandler.push(
          <td key={'headHandler' + i}>
            <input type="button" onClick={this.handleDeleteCol} data-col={i} className="btn btn-danger" value="Col -" />
            <input type="button" onClick={this.handleAddCol} data-col={i} className="btn btn-primary" value="Col +" />
          </td>
        )
      }
    }
    return (
      <thead>
        {this.props.nbCol > 0 &&
          <tr>
            <td>
            </td>
            {groupHandler}
          </tr>
        }
        {groupList}
      </thead>)
  }
}

const mapStateToProps = state => {
  return {
    tableau: state.tableau,
    nbCol: state.nbCol,
  }
}

const mapDispatchToProps = (dispatch, stateProps) => {
  return {
    deleteCol: (idx) => {
      dispatch(deleteCol(idx))
    },
    addCol: (idx) => {
      dispatch(addNewCol(idx))
    },
    addRow: (idx) => {
      dispatch(addNewRow(idx))
    },
    deleteRow: (type, idx) => {
      dispatch(deleteRow(type, idx))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Thead);