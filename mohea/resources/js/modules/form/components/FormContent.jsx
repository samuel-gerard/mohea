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
                <div  className="form-group">
                    <p>{element.content}</p>
                </div>                    
            )

        case 'Title':

            switch(element.tag){
                case 'h1':
                    return (
                        <div className="form-group">
                            <h1>{element.content}</h1>
                        </div>
                    )
                case 'h2':
                    return (
                        <div className="form-group">
                            <h2>{element.content}</h2>
                        </div>
                    )
                case 'h3':
                    return (
                        <div className="form-group">
                            <h3>{element.content}</h3>
                        </div>
                    )
                case 'h4':
                    return (
                        <div className="form-group">
                            <h4>{element.content}</h4>
                        </div>
                    )
            }

        case 'Submit':
            return (
                <div className="form-group">
                    <input type="submit" className="form-control" value={element.value} />
                </div>
            )
            
        case 'Text Input':
        case 'Date':
        case 'Email':
        case 'Link':
        case 'Phone':
        case 'Password':
            return (
                <div className="form-group">
                    <label>{element.label}</label>
                    <input type={element.type} className="form-control" placeholder={element.placeholder} />
                </div>
            )

        case 'Text Area':
            var textAreaId = "textAreaInput"+element.id
            return (
                <div className="form-group">
                    <label htmlFor={textAreaId}>{element.label}</label>
                    <textarea rows={element.rows} id={textAreaId} className="form-control" col={element.col} placeholder={element.placeholder} />
                </div>
            )

        case 'Select':
            var selectId = "salectInput"+element.id
            return (
                <div className="form-group">
                    <label htmlFor={selectId}>{element.label}</label>
                    <select className="form-control" id={selectId}>
                        {element.options.map((option, i) => {
                            return <option key={i} value={option.value}>{option.content}</option>
                        })}
                    </select>
                </div>
            )

        case 'Check Box':
        case 'Radio Button':
            return (
            <div className="form-group">
                <label className="col-form-label">{element.label}</label>
                {element.options.map((option, i) => {
                    var name = "radio_"+element.id
                    var id = "id_"+i
                    var value = "val_"+i  
                    return (
                        <div className="form-check" key={i}>
                            <input className="form-check-input" key={i} name={name} type={option.type} value={value} id={id} />
                            <label className="form-check-label" htmlFor={id}>{option.label}</label>
                        </div>
                    )
                })}
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
