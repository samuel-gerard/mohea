import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewItem } from "../redux/actions";


class FormEdit extends Component {

    render(){
        return <div className="">
            <h2>Edit an Element</h2>
            
        </div>
    }

}

const mapStateToProps = state => {
    return {
        form: state.form,
        elements: state.elementsChoices
    }
}

const mapDispatchToProps = (dispatch, stateProps) => {
    return {
            addNewItem: (parent_idx) => {
            dispatch(addNewItem(parent_idx))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormEdit);
