import React, {Component} from "react";
import { connect } from "react-redux";
import FormContent from "./FormContent";
import FormReturn from "./FormReturn";
import FormEdit from "./FormEdit";

import { resetForm } from "../redux/actions";


class Form extends React.Component {

  /* componentDidMount() {
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
  } */


  handleResetForm = () =>
  {
    this.props.resetForm()
  }

  render() {
    return <section>
        <h1>{this.props.name || 'New Form'}</h1>
        {/* custom input */}
        <div className="row">
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="menu-name">
                Name for this Form
              </label>
              <input type="text" className="form-control" name="name" id="menu-name" value={this.props.name} />
            </div>
            <div className="form-group card p-2 bg-info text-white">
              <h4>Menu global style</h4>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="class-style" value="navbar" defaultChecked/>
                <label className="form-check-label" htmlFor="class-style">With bootstrap initial style</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="class-light" value="navbar-light bg-light" defaultChecked/>
                <label className="form-check-label" htmlFor="class-light">Light</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="class-dark" value="navbar-dark bg-dark" />
                <label className="form-check-label" htmlFor="class-dark">Dark</label>
              </div>
            </div>
            <div className="form-group d-flex justify-content-between">
              <input type="button" className="btn btn-primary form-control mr-1" value="Display code" />
              <input type="button" className="w-25 btn btn-danger" value="Reset" onClick={() => this.handleResetForm()} />
            </div>
          </div>
          <div className="col-md-9">
            <FormContent />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <FormEdit />
          </div>
        </div>
        <div className="row">
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
    title: state.title
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetForm: () => {
      dispatch(resetForm())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
