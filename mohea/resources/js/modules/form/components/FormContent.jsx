import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewItem, addFocus } from "../redux/actions";


class FormContent extends Component {

    renderSwitch(element)
    {
        switch(element.name)
        {

        case 'Text':
            return (
                <div>
                    <label>{element.label}</label>
                    <p>{element.content}</p>
                </div>
            )

        case 'Title':

            switch(element.tag){
                case 'h1':
                    return (
                        <h1>{element.content}</h1>
                    )
                case 'h2':
                    return (
                        <h2>{element.content}</h2>
                    )
                case 'h3':
                    return (
                        <h3>{element.content}</h3>
                    )
                case 'h4':
                    return (
                        <h4>{element.content}</h4>
                    )
            }

        case 'Submit':
            return (
                <div>
                    <label>{element.label}</label>
                    <input type="submit" value={element.value} />
                </div>
            )
            
        case 'Text Input':
        case 'Date':
        case 'Email':
        case 'Link':
        case 'Phone':
        case 'Password':
            return (
                <div>
                    <label>{element.label}</label>
                    <input type={element.type} placeholder={element.placeholder} />
                </div>
            )

        case 'Text Area':
            return (
                <div>
                    <label>{element.label}</label>
                    <textarea rows={element.rows} col={element.col} placeholder={element.placeholder} />
                </div>
            )

        case 'Select':
            return (
                <div>
                    <label>{element.label}</label>
                    <select>
                        {element.options.map((option, i) => {
                            return <option key={i} value={option.value}>{option.content}</option>
                        })}
                    </select>
                </div>
            )

        case 'Check Box':
        case 'Radio Button':
            return (
            <div>
                <label>{element.label}</label>
                <div>
                    {element.options.map((option, i) => {
                        var name = "radio_"+element.id
                        var id = "id_"+i
                        var value = "val_"+i  
                        return (
                            <div key={i}>
                                <input key={i} name={name} type={option.type} value={value} id={id} />
                                <label htmlFor={id}>{option.label}</label>
                            </div>
                        )
                    })}
                </div>
            </div>
            )  
            
        }
    
    }

    handleAddItem = (element) => {
        this.props.addNewItem(element)
    }

    handleAddFocus = (element) =>
    {
        this.props.addFocus(element)
    }

    render(){
        return <div className="section-form">
            <h2>Add an Element</h2>
            <div className="elements-choices">
                {this.props.elements.map((element, i) => (
                    <input key={i} type="button" onClick={() => this.handleAddItem(element)} className="btn btn-primary" value={element.name} />
                ))}
            </div>
            <div className="form_boox">
                <form>
                    {this.props.elementsUsed.map((element, i) => (
                        <div key={i} onClick={() => this.handleAddFocus(element)}>
                            {this.renderSwitch(element)}
                        </div>
                    ))}
                </form>
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
        addNewItem: (element) => {
            dispatch(addNewItem(element))
        },
        addFocus: (element) => {
            dispatch(addFocus(element))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContent);
