import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewItem } from "../redux/actions";


class FormContent extends Component {

    handleAddItem = () => {
        console.log(this.props.elements)
        this.props.addNewItem()
    }

    render(){
        return <div className="section-form">
            <h2>Add an Element</h2>
            <div className="elements-choices">
                {this.props.elements.map((element, i) => (
                    <input key={i} type="button" onClick={() => this.handleAddItem()} className="btn btn-primary" value={element.name} />
                ))}
            </div>
            <div className="form-display">
                {console.log(this.props.elementsUsed)}
                {this.props.elementsUsed.map((element, i) => (
                    <div>
                        <h3 key={i}>{element.name}</h3>
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
        addNewItem: () => {
            dispatch(addNewItem())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContent);
