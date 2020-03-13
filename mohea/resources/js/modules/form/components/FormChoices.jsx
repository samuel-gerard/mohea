import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewItem } from "../redux/actions";


class FormChoices extends Component {

    handleAddItem = (element) => {
        this.props.addNewItem(element)
    }

    render() {
        return <div className="section-form ta-center">
            <h2>Add an element</h2>
            <div className="elements-choices">
                {this.props.elements.map((element, i) => (
                    <input key={i} type="button" onClick={() => this.handleAddItem(element)} className="button element-choice" value={element.name} />
                ))}
            </div>
        </div>
    }

}

const mapStateToProps = state => {
    return {
        elements: state.elementsChoices
    }
}

const mapDispatchToProps = (dispatch, stateProps) => {
    return {
        addNewItem: (element) => {
            dispatch(addNewItem(element))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormChoices);
