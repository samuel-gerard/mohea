import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewItem, deleteItem, updateItemValue, updateInputSelected } from "../redux/actions";

class MenuContent extends Component {
  handleAddItem = (parent_idx) => {
    this.props.addNewItem(parent_idx)
  }

  handleDeleteItem = (idx) => {
    this.props.deleteItem(null, idx)
  }

  handleUpdateValue = (e) => {
    const split = e.target.dataset.idx.split('/');
    const parent_idx = split[0];
    const idx = split[1];
    this.props.updateItemValue(e.target.value, parent_idx, idx)
  }

  handleInputSelected = (e) => {
    const split = e.target.dataset.idx.split('/');
    const parent_idx = split[0];
    const idx = split[1];
    this.props.updateInputSelected(parent_idx, idx)
  }

  render() {
    const menuClasses = this.props.classes.join(' ');

    return (
      <nav className={menuClasses + ' navbar-expand-sm'}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {Object.values(this.props.menu).map( (item, idx) => {
              return (
                <li key={'menu-0-' + idx}
                  className="nav-item d-flex align-items-center">
                  <input type="text"
                    data-idx={'-1/' + idx}
                    onFocus={this.handleInputSelected}
                    onChange={this.handleUpdateValue}
                    value={item.value}
                    className="form-control"
                    style={item.style} />
                  <input type="button" onClick={() => this.handleDeleteItem(idx)} className="btn btn-secondary d-inline-block" value="-" />
                  <input type="button" onClick={() => this.handleAddItem(idx)} className="btn btn-primary" value="+" />
                </li>
              );
            })}
            <input type="button" onClick={() => this.handleAddItem(-1) } className="btn btn-primary" value="+" />
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    menu: state.menu,
    classes: state.classes,
  }
}

const mapDispatchToProps = (dispatch, stateProps) => {
  return {
    addNewItem: (parent_idx) => {
      dispatch(addNewItem(parent_idx))
    },
    deleteItem: (parent_idx, idx) => {
      dispatch(deleteItem(parent_idx, idx))
    },
    updateItemValue: (val, parent_idx, idx) => {
      dispatch(updateItemValue(val, parent_idx, idx))
    },
    updateInputSelected: (parent_idx, idx) => {
      dispatch(updateInputSelected(parent_idx, idx))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContent);
