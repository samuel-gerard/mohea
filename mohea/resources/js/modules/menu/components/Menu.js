import React, {Component} from "react";
import axios from 'axios';
import { connect } from "react-redux";
import MenuReturn from "./MenuReturn.jsx";
import BootstrapReturn from "../../../components/BootstrapReturn";
import { loadMenu, resetMenu, updateName, updateClasses, undoAction, redoAction } from "../redux/actions";
import MenuContent from "./MenuContent";
import CustomInput from "./CustomInput";
import { Canceller } from "../../../components/Canceller";
import { SaveProject } from "../../../components/SaveProject";

class Menu extends Component {

  componentDidMount() {
    const href = window.location.href;
    const id = href.substring(href.lastIndexOf('/') + 1)

    if( ! parseInt(id, 10) ) {
      return;
    }
    
    axios({
        method: 'GET',
        url: window.location.origin + '/project/' + id,
      })
      .then(res => {
        if(res.status === 200) {
          const data = res.data;
          const menu = JSON.parse(data.content);
          this.props.loadMenu(id, menu.classes, menu.content, data.name);
        }
      })
      .catch(err => {
        window.location.replace(window.location.origin + '/error');
      })
  }
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

  handleClasses = (e) => {
    if(e.target.name) {
      this.props.updateClasses(document.querySelector("input[name=" + e.target.name + "]:not(:checked").value);
    }
    this.props.updateClasses(e.target.value);
  }

  /* ===============================================
  * DISPLAY COMPONENT
  =============================================== */
  render() {
    return <section>
        <h1>{this.props.name || 'New Menu'}</h1>
        <SaveProject content={this.props.menu} classes={this.props.classes} name={this.props.name} type="menu" />
        <CustomInput />
        <Canceller undoAction={this.props.undoAction} redoAction={this.props.redoAction} />
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
                <input className="form-check-input" type="checkbox" id="class-style" onChange={this.handleClasses} value="navbar" checked={this.props.classes.find(el => el === 'navbar') ? 'checked' : 'false'}/>
                <label className="form-check-label" htmlFor="class-style">With bootstrap initial style</label>
              </div>
              <div className="form-radio">
                <input className="form-radio-input" name="bg-color" type="radio" id="class-light" onChange={this.handleClasses} value="navbar-light bg-light" checked={this.props.classes.find(el => el === 'navbar-light bg-light') ? 'checked' : false}/>
                <label className="form-radio-label" htmlFor="class-light">Light</label>
              </div>
              <div className="form-radio">
                <input className="form-radio-input" name="bg-color" type="radio" id="class-dark" onChange={this.handleClasses} value="navbar-dark bg-dark" checked={this.props.classes.find(el => el === 'navbar-dark bg-dark') ? 'checked' : false}/>
                <label className="form-radio-label" htmlFor="class-dark">Dark</label>
              </div>
            </div>
            <div className="form-group d-flex justify-content-between">
              <input type="button" className="w-25 btn btn-primary" value="Reset" onClick={this.handleReset} />
            </div>
          </div>
          <div className="col-md-9">
            <MenuContent />
          </div>
        </div>
        <div className="col-md-12">
          <BootstrapReturn />
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
    classes: state.classes,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadMenu: (id, classes, menu, name) => {
      dispatch(loadMenu(id, classes, menu, name));
    },
    updateName: name => {
      dispatch(updateName(name))
    },
    updateClasses: classe => {
      dispatch(updateClasses(classe))
    },
    resetMenu: () => {
      dispatch(resetMenu())
    },
    undoAction: () => {
      dispatch(undoAction())
    },
    redoAction: () => {
      dispatch(redoAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
