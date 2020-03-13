import React, { Component } from "react";
import axios from 'axios';
import { connect } from "react-redux";
import FormContent from "./FormContent";
import FormReturn from "./FormReturn";
import BootstrapReturn from "../../../components/BootstrapReturn";
import FormChoices from "./FormChoices";
import FormEdit from "./FormEdit";
import { SaveProject } from "../../../components/SaveProject";
import { Canceller } from "../../../components/Canceller";

import { resetForm, loadForm, updateName, undoAction, redoAction } from "../redux/actions";


class Form extends React.Component {

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
          const form = JSON.parse(data.content);
          this.props.loadForm(form.content, data.name);
        }
      })
      .catch(err => {
        window.location.replace(window.location.origin + '/error');
      })

  }

  handleUpdateName = (e) => {
    this.props.updateName(e.target.value)
  }

  handleResetForm = () => {
    this.props.resetForm()
  }

  render() {
    return <section>
      <nav id="header" className="header min show-logo">
        <ul className="d-flex jc-e ai-c">
          <li className="new"><SaveProject content={this.props.form} classes={null} name={this.props.name} type="form" /></li>
          <li className="no-padding"><Canceller undoAction={this.props.undoAction} redoAction={this.props.redoAction} /></li>
          <li className="logo ml-auto mr-auto"><a href="/"><img src="/images/logo_medium.png" alt="Logo of Mohea" draggable="false" /></a></li>
          <li><a className="link primary" href="/dashboard">Your dashboard</a></li>
        </ul>
      </nav>
      <main className="padding-bottom">
        <div className="form-group title">
          <label htmlFor="menu-name">Name of the form</label>
          <input type="text" className="form-control form-control-lg h1 bold" name="name" id="menu-name" onChange={this.handleUpdateName} value={this.props.name || 'New form'} />
        </div>
        <FormEdit />
        <div className="sandbox">
          <h2 className="h1 bold ta-center">Sandbox</h2>
            <FormContent />
            <FormChoices />
        </div>
        <FormReturn />
      </main>
    </section>
  }


}

const mapStateToProps = state => {
  return {
    form: state.elementsUsed,
    elements: state.elementsChoices,
    title: state.title,
    name: state.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetForm: () => {
      dispatch(resetForm())
    },
    loadForm: (form, name) => {
      dispatch(loadForm(form, name))
    },
    updateName: (name) => {
      dispatch(updateName(name))
    },
    undoAction: () => {
      dispatch(undoAction())
    },
    redoAction: () => {
      dispatch(redoAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
