import React, {Component} from "react";
import { connect } from "react-redux";
import MenuReturn from "./MenuReturn.jsx";
import { addNewItem, resetMenu, updateName, updateClasses, saveMenu } from "../redux/actions";
import MenuContent from "./MenuContent";
import CustomInput from "./CustomInput";

class Menu extends Component {
  /* ===============================================
  * DELETE FUNCTIONS
  =============================================== */
  // Delete all the menu
  handleReset = () => {
    this.props.resetMenu();
  }

  handleName = (e) => {
    this.props.updateName(e.target.value);
  }

  handleInitialize = (e) => {
    e.preventDefault();

    // @TODO
    this.props.addNewItem(type, i);
  }

  handleClasses = (e) => {
    this.props.updateClasses(e.target.value);
  }

  /* ===============================================
  * Get JSON about this menu
  =============================================== */
  handleGenerate = () => {
    console.log(this.props.menu)
  }

  handleSave = () => {
    this.props.saveMenu();
  }
  /* ===============================================
  * DISPLAY COMPONENT
  =============================================== */
  render() {
    return <section>
        <h1>{this.props.name || 'New Menu'}</h1>
        <CustomInput />
        <div className="row">
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="menu-name">
                Name for this menu
              </label>
              <input type="text" className="form-control" name="name" id="menu-name" onChange={this.handleName} value={this.props.name} />
            </div>
            <div className="form-group card p-2 bg-info text-white">
              <h4>Menu global style</h4>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="class-style" onChange={this.handleClasses} value="navbar" defaultChecked/>
                <label className="form-check-label" htmlFor="class-style">With bootstrap initial style</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="class-light" onChange={this.handleClasses} value="navbar-light bg-light" defaultChecked/>
                <label className="form-check-label" htmlFor="class-light">Light</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="class-dark" onChange={this.handleClasses} value="navbar-dark bg-dark" />
                <label className="form-check-label" htmlFor="class-dark">Dark</label>
              </div>
            </div>
            <div className="form-group d-flex justify-content-between">
              <input type="button" className="btn btn-primary form-control mr-1" value="Display code" onClick={this.handleGenerate} />
              <input type="button" className="w-25 btn btn-primary" value="Reset" onClick={this.handleReset} />
            </div>
          </div>
          <div className="col-md-9">
            <MenuContent />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <MenuReturn />
          </div>
        </div>
      </section>
  }
}

const mapStateToProps = state => {
  return {
    menu: state.menu,
    name: state.name,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateName: name => {
      dispatch(updateName(name))
    },
    updateClasses: classe => {
      dispatch(updateClasses(classe))
    },
    resetMenu: () => {
      dispatch(resetMenu())
    },
    addNewItem: (parent_idx, idx) => {
      dispatch(addNewItem(type, idx))
    },
    saveMenu: () => {
      dispatch(saveMenu)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
