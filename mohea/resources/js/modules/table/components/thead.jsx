import React, {Component} from "react";
import { connect } from "react-redux";
import { addNewRow, addNewCol } from "../redux/actions";

class Thead extends Component {
  constructor(props) {
    super(props)
    console.log('props head', props)
  }

  componentDidUpdate = (prevProps) => {
    console.log('update Thead')
  }

  handleChange = (event) => {
    const split = event.target.id.split('/')
    const col = split[1]
    const row = split[0];
    this.props.items[row][col] = event.target.value
  }

  handleDeleteCol = () => {
    this.props.deleteCol();
  }

  handleAddCol = () => {
    this.props.addCol();
  }

  handleAddRow = () => {
    this.props.addRow(this.props.tableau.head);
  }

  render() {
    const group = Object.values(this.props.tableau.head)
    console.log('---', group);
    const groupList = group.length > 0 ? (
      group.map((items, i) => {
        return (
        <tr key={'lineHead' + i}>
          <td>
            {i === (group.length - 1) &&
              <input type="button" onClick={this.handleAddRow} className="btn btn-secondary" value="Head +" />
            }
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
            Nothing
          </td>
        </tr>
      );

    return (
      <thead>
        {this.props.nbCol > 1 &&
          <tr>
            <td>
              <input type="button" onClick={this.handleDeleteCol} className="btn btn-primary" value="Col -" />
            </td>
            <td>
              <input type="button" onClick={this.handleAddCol} className="btn btn-primary" value="Col +" />
            </td>
          </tr>
        }
        {group.length === 0 &&
          <tr>
            <td>
              <input type="button" onClick={this.handleAddRow} className="btn btn-secondary" value="Head +" />
            </td>
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
    deleteCol: () => {
      dispatch({ type: "DELETE_COL" })
    },
    addCol: () => {
      dispatch(addNewCol())
    },
    addRow: (items) => {
      dispatch(addNewRow(items))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Thead);