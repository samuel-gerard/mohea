import React, {Component} from "react";
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

  handleResetForm = () =>
  {
    this.props.resetForm()
  }

  render() {
    return <section>
        <div className="container-fluid">
          <h1>{this.props.name || 'New Form'}</h1>
          <div className="row">
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="menu-name">
                  Name for this Form
                </label>
                <input type="text" className="form-control" name="name" onChange={this.handleUpdateName} id="menu-name" value={this.props.name} />
                <SaveProject content={this.props.form} classes={null} name={this.props.name} type="form" />
                <Canceller undoAction={this.props.undoAction} redoAction={this.props.redoAction} />
              </div>
              <FormChoices />
            </div>
            <div className="col-md-6">
              <FormContent />
            </div>
            <div className="col-md-3">
              <div className="form-group card p-2 bg-info text-white">
                <div className="col-md-12">
                  <FormEdit />
                </div>
              </div>
              <div className="form-group d-flex justify-content-between">
                <input type="button" className="w-25 btn btn-danger" value="Reset Form" onClick={() => this.handleResetForm()} />
              </div>            
            </div>
          </div>
          <div className="col-md-12">
            <BootstrapReturn />
          </div>
          <div className="col-md-12">
            <FormReturn />
          </div>
        </div>
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
