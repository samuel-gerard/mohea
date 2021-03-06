import React, { Component } from "react";
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

    if (!parseInt(id, 10)) {
      return;
    }

    axios({
      method: 'GET',
      url: window.location.origin + '/project/' + id,
    })
      .then(res => {
        if (res.status === 200) {
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
    if (e.target.name) {
      this.props.updateClasses(document.querySelector("input[name=" + e.target.name + "]:not(:checked").value);
    }
    this.props.updateClasses(e.target.value);
  }

  /* ===============================================
  * DISPLAY COMPONENT
  =============================================== */
  render() {
    return <section>
      <nav id="header" className="header min show-logo">
        <ul className="d-flex jc-e ai-c">
          <li className="new"><SaveProject content={this.props.menu} classes={this.props.classes} name={this.props.name} type="menu" /></li>
          <li className="no-padding"><Canceller undoAction={this.props.undoAction} redoAction={this.props.redoAction} /></li>
          <li className="logo ml-auto mr-auto"><a href="/"><img src="/images/logo_medium.png" alt="Logo of Mohea" draggable="false" /></a></li>
          <li><a className="link primary" href="/dashboard">Your dashboard</a></li>
        </ul>
      </nav>
      <main className="padding-bottom">
        <div className="form-group title">
          <label htmlFor="menu-name">Name of the menu</label>
          <input type="text" className="form-control form-control-lg h1 bold" name="name" id="menu-name" onChange={this.handleName} value={this.props.name || 'New menu'} />
        </div>
        <div className="form-group title ta-center">
          <div className="custom-control custom-switch form-control-with-margin">
            <input className="custom-control-input" type="checkbox" id="class-style" onChange={this.handleClasses} value="navbar" checked={this.props.classes.find(el => el === 'navbar') ? 'checked' : false} />
            <label className="custom-control-label" htmlFor="class-style">With Bootstrap initial style</label>
          </div>
          <div className="form-check form-check-inline form-control-with-margin">
            <input className="form-check-input" name="bg-color" type="radio" id="class-light" onChange={this.handleClasses} value="navbar-light bg-light" checked={this.props.classes.find(el => el === 'navbar-light bg-light') ? 'checked' : false} />
            <label className="form-check-label" htmlFor="class-light">Light theme</label>
          </div>
          <div className="form-check form-check-inline form-control-with-margin">
            <input className="form-check-input" name="bg-color" type="radio" id="class-dark" onChange={this.handleClasses} value="navbar-dark bg-dark" checked={this.props.classes.find(el => el === 'navbar-dark bg-dark') ? 'checked' : false} />
            <label className="form-check-label" htmlFor="class-dark">Dark skin</label>
          </div>
        </div>
        <CustomInput />
        <div className="sandbox">
          <h2 className="h1 bold ta-center">Sandbox</h2>
          <MenuContent />
        </div>
        <MenuReturn />
      </main>
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
