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
                <div className="form-group">
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
                    <button className="btn btn-primary">{element.value}</button>
                </div>
            )
            
        case 'Text Input':
        case 'Date':
        case 'Email':
        case 'Link':
        case 'Phone':
        case 'Password':
            var input_id = "input_"+element.id
            return (
                <div className="form-group">
                    <label htmlFor={input_id}>{element.label}</label>
                    <input type={element.type} id={input_id} className="form-control" placeholder={element.placeholder} />
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
            var selectId = "select_"+element.id+"_id_"+element.id
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
                    var id = "check_radio"+element.id+"_id_"+option.id
                    var value = "val_"+option.id
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

    handleAddFocus = (element) =>
    {
        this.props.addFocus(element)
    }

    render(){
        return <div className="section-form">
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
    }
}

const mapDispatchToProps = (dispatch, stateProps) => {
    return {
        addFocus: (element) => {
            dispatch(addFocus(element))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContent);
