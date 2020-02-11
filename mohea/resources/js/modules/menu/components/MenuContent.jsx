import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewItem, deleteItem, updateItemValue, updateInputSelected } from "../redux/actions";

class MenuContent extends Component {
  handleAddItem = (parent_idx) => {
    this.props.addNewItem(parent_idx)
  }

  handleDeleteItem = (parent_idx, idx) => {
    this.props.deleteItem(parent_idx, idx)
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

  handleInputBlur = () => {
    this.props.updateInputSelected(null, null);
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
              if(item.children.length === 0) {
                return (
                  <li key={'menu-0-' + idx}
                    className="nav-item d-flex align-items-center">
                    <input type="text"
                      data-idx={'-1/' + idx}
                      onFocus={this.handleInputSelected}
                      onBlur={this.handleInputBlur}
                      onChange={this.handleUpdateValue}
                      value={item.value}
                      className="nav-link"
                      style={item.style} />
                    <input type="button" onClick={() => this.handleDeleteItem(-1, idx)} className="btn btn-secondary d-inline-block" value="-" />
                    <input type="button" onClick={() => this.handleAddItem(idx)} className="btn btn-primary" value="+" />
                  </li>
                )
              }

              return (
                <li key={'menu-0-' + idx}
                  className="nav-item dropdown show">
                  <input type="text"
                      data-idx={'-1/' + idx}
                      onFocus={this.handleInputSelected}
                      onBlur={this.handleInputBlur}
                      onChange={this.handleUpdateValue}
                      value={item.value}
                      className="nav-link dropdown-toggle"
                      style={item.style}
                      data-toggle="dropdown"
                      aria-haspopup="false"
                      aria-expanded="true" />
                    <input type="button" onClick={() => this.handleDeleteItem(-1, idx)} className="btn btn-secondary d-inline-block" value="-" />
                    <input type="button" onClick={() => this.handleAddItem(idx)} className="btn btn-primary" value="+" />

                  <div className="dropdown-menu show" aria-labelledby={item.title + '-' + idx}>
                  {Object.values(item.children).map((child, child_idx) => {
                    return (
                      <div key={'child-' + idx + '-' + child_idx}
                        className="dropdown-item">
                        <input type="text"
                          data-idx={idx + '/' + child_idx}
                          onFocus={this.handleInputSelected}
                          onBlur={this.handleInputBlur}
                          onChange={this.handleUpdateValue}
                          value={child.value}
                          style={child.style} />
                        <input type="button" onClick={() => this.handleDeleteItem(idx, child_idx)} className="btn btn-secondary d-inline-block" value="-" />
                      </div>
                    )
                  })}
                  </div>
                </li>
              )
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
