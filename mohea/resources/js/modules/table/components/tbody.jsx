import React, {Component} from "react";
import { connect } from "react-redux";
import { addNewRow, deleteRow, updateValue } from "../redux/actions";
import { CustomInput } from "../../../components/CustomInput";

class Tbody extends Component {
  handleUpdateValue = (e) => {
    const split = event.target.dataset.id.split('/');
    const col = split[1];
    const row = split[0];
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

  render() {
    const group = Object.values(this.props.tableau.body)
    const groupList = group.length > 0 ? (
      group.map((items, i) => {
        return (
        <tr key={'lineBody' + i}>
          <td>
            <input type="button" onClick={this.handleDeleteRow} data-row={i} className="btn btn-danger" value="Body -" />
            <input type="button" onClick={this.handleAddRow} data-row={i} className="btn btn-secondary" value="Body +" />
          </td>
          {Object.values(items).map((item, j) => {
            return (
              <td key={'body' + j}>
                <input type='text' data-id={i + '/' + j} onChange={this.handleUpdateValue} value={item} className="form-control" />
              </td>
            );
          })}
        </tr>
      )})) : (
        <tr>
          <td>
            <input type="button" onClick={this.handleAddRow} data-row={0} className="btn btn-secondary" value="Body +" />
          </td>
          <td colSpan={this.props.nbCol}>
            Nothing
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
      dispatch(updateValue(type, val, row, col));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tbody);