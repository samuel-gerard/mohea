import React, {Component} from "react";
import { connect } from "react-redux";
import { addNewRow, addNewCol, deleteCol, deleteRow, updateValue } from "../redux/actions";

class Thead extends Component {
  handleUpdateValue = (e) => {
    const split = event.target.id.split('/');
    const col = split[1];
    const row = split[0];
    this.props.updateValue('head', e.target.value, row, col);
  }

  handleDeleteCol = (e) => {
    this.props.deleteCol(e.target.dataset.col);
  }

  handleAddCol = (e) => {
    this.props.addCol(e.target.dataset.col);
  }

  handleAddRow = (e) => {
    this.props.addRow('head', e.target.dataset.row);
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
          <th>
            <input type="button" onClick={this.handleDeleteRow} data-row={i} className="btn btn-danger" value="Head -" />
            <input type="button" onClick={this.handleAddRow} data-row={i} className="btn btn-secondary" value="Head +" />
          </th>
          {Object.values(items).map((item, j) => {
            return (
              <th key={'head' + j}>
                <input type='text' id={i + '/' + j} onChange={this.handleUpdateValue} value={item} className="form-control" />
              </th>
            );
          })}
        </tr>
      )})) : (
        <tr>
          <th>
            <input type="button" onClick={this.handleAddRow} data-row={0} className="btn btn-secondary" value="Head +" />
          </th>
          <th colSpan={this.props.nbCol}>
            Nothing
          </th>
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
      <thead className="thead-light">
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
    addRow: (type, idx) => {
      dispatch(addNewRow(type, idx))
    },
    deleteRow: (type, idx) => {
      dispatch(deleteRow(type, idx))
    },
    updateValue: (type, val, row, col) => {
      dispatch(updateValue(type, val, row, col));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Thead);