import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewItem } from "../redux/actions";
import nextId from "react-id-generator";


class FormContent extends Component {

    handleAddItem = (id, element) => {
        this.props.addNewItem(id, element)
    }

    render(){
        return <div className="section-form">
            <h2>Add an Element</h2>
            <div className="elements-choices">
                {this.props.elements.map((element, i) => (
                    <input key={i} type="button" onClick={() => this.handleAddItem(nextId(), element)} className="btn btn-primary" value={element.name} />
                ))}
            </div>
            <div className="form_box">
                {this.props.elementsUsed.map((element, i) => (
                    <div key={i}>
                        <h3>{element.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    }

}

const mapStateToProps = state => {
    return {
        elementsUsed: state.elementsUsed,
        elements: state.elementsChoices
    }
}

const mapDispatchToProps = (dispatch, stateProps) => {
    return {
        addNewItem: (id, element) => {
            dispatch(addNewItem(id, element))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContent);
