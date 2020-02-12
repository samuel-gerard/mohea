import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteItem } from "../redux/actions";


class FormEdit extends Component {



    handleDeleteItem(element)
    {
        // console.log(element)
        this.props.deleteItem(element)
    }

    render(){

        return <div className="">
            <h2>Edit an Element</h2>

            <div>
                {this.props.focus > -1 ? (
                    <div>
                        <h3>{this.props.elementsUsed[this.props.focus].name}</h3>
                        {/* afficher formulaire de modification d'un element */}
                        <input type="button" onClick={() => this.handleDeleteItem(this.props.elementsUsed[this.props.focus])} className="btn btn-primary" value="Delete Element" />
                    </div>
                    ) : (
                    <p>Click on an element to update it</p>
                )}
            </div>

        </div>
    }

}

const mapStateToProps = state => {
    return {
        form: state.form,
        elements: state.elementsChoices,
        elementsUsed: state.elementsUsed,
        focus: state.focus
    }
}

const mapDispatchToProps = (dispatch, stateProps) => {
    return {
        deleteItem: (element) => {
            dispatch(deleteItem(element))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormEdit);
