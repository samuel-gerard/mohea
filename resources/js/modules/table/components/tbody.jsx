import React, {Component} from "react";
import { connect } from "react-redux";
import { addNewRow, deleteRow, updateValue, updateInputSelected } from "../redux/actions";

class Tbody extends Component {
  handleUpdateValue = (e) => {
    const split = event.target.dataset.id.split('/');
    const row = split[0];
    const col = split[1];
    this.props.updateValue('body', e.target.value, row, col);
  }

  handleDeleteCol = (e) => {
    this.props.deleteCol(e.target.dataset.col);
  }

  handleAddCol = (e) => {
    this.props.addCol(e.target.dataset.col);
  }

  handleAddRow = (e) => {
    this.props.addRow('body', e.target.dataset.row);
  }

  handleDeleteRow = (e) => {
    this.props.deleteRow('body', e.target.dataset.row)
  }

  handleInputSelected = (e) => {
    const split = event.target.dataset.id.split('/');
    const row = split[0];
    const col = split[1];
    this.props.updateInputSelected('body', row, col)
  }

  render() {
    const group = Object.values(this.props.tableau.body)
    const groupList = group.length > 0 ? (
      group.map((items, i) => {
        return (
        <tr key={'lineBody' + i}>
          <td>
            Body
            <button type="button" title="Remove the body section" onClick={this.handleDeleteRow} data-row={i} className="button round"><i className="fas fa-minus"></i></button>
            <button type="button" title="Add a body section" onClick={this.handleAddRow} data-row={i} className="button round"><i className="fas fa-plus"></i></button>
          </td>
          {Object.values(items).map((item, j) => {
            return (
              <td key={'body' + j}>
                <input type='text'
                  data-id={i + '/' + j}
                  onFocus={this.handleInputSelected}
                  onChange={this.handleUpdateValue}
                  value={item.value}
                  className="form-control"
                  style={item.style} />
              </td>
            );
          })}
        </tr>
      )})) : (
        <tr>
          <td>
            Body
            <button type="button" title="Add a body section" onClick={this.handleAddRow} data-row={0} className="button round primary"><i className="fas fa-plus"></i></button>
          </td>
          <td colSpan={this.props.nbCol}>
            Empty
          </td>
        </tr>
      );

    return (
      <tbody>
        {groupList}
      </tbody>)
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
    addRow: (type, idx) => {
      dispatch(addNewRow(type, idx))
    },
    deleteRow: (type, idx) => {
      dispatch(deleteRow(type, idx))
    },
    updateValue: (type, val, row, col) => {
      dispatch(updateValue(type, val, row, col))
    },
    updateInputSelected: (type, row, col) => {
      dispatch(updateInputSelected(type, row, col))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tbody);