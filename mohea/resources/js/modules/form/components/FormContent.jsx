import React, { Component } from "react";
import { connect } from "react-redux";

class FormContent extends Component {

    render(){
        return <div>
                Form content
            </div>
    }

}

const mapStateToProps = state => {
    return {
      form: state.form,
    }
  }

export default connect(mapStateToProps)(FormContent);
