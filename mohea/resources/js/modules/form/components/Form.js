import React, {Component} from "react";
import { connect } from "react-redux";
import FormContent from "./FormContent";
// import CustomInput from "./CustomInput";


class Form extends React.Component {

  /* render(){
    const { form } = this.props
    const formData = form.length ? (
      form.map(element => {
        return (
          <div key={element.id}>
            <h2>Salut ! {element.title}</h2>
            <h3>{element.content}</h3>
          </div>
        )
      })
    ) : (
      <p>Aucun element encore ajouté</p>
    )
    return (
      <div>
        <h1>{this.props.title}</h1>
        {formData}  
      </div>
    )
  } */



  render() {
    return <section>
        <h1>{this.props.name || 'New Form'}</h1>
        {/* custom input */}
        <div className="row">
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="menu-name">
                Name for this form
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
              <input type="button" className="w-25 btn btn-primary" value="Reset" />
            </div>
          </div>
          <div className="col-md-9">
            <FormContent />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {/* form return */}
          </div>
        </div>
      </section>
  }


}

const mapStateToProps = state => {
  return {
    form: state.form,
    title: state.title
  }
}

export default connect(mapStateToProps)(Form);
