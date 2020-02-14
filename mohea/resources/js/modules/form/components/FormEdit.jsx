import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteItem, updateElement, duplicateItem } from "../redux/actions";


class FormEdit extends Component {

    handleDeleteItem(element)
    {
        this.props.deleteItem(element)
    }

    handleDuplicateItem(element)
    {
        this.props.duplicateItem(element)
    }

    handleUpdateText = (e) => {
        let newElement = this.props.elementsUsed[this.props.focus]
        if(e.target.name == 'content'){
            newElement.content = e.target.value
        }
        this.props.updateElement(newElement, this.props.focus)
    }
    
    handleUpdateTitle = (e) => {
        let newElement = this.props.elementsUsed[this.props.focus]
        if(e.target.name == 'content'){
            newElement.content = e.target.value
        }else if(e.target.name == 'tag'){
            newElement.tag = e.target.value
        }
        this.props.updateElement(newElement, this.props.focus)
    }
    
    handleUpdateSubmit = (e) => {
        let newElement = this.props.elementsUsed[this.props.focus]
        if(e.target.name == 'value'){
            newElement.value = e.target.value
        }
        this.props.updateElement(newElement, this.props.focus)
    }
    
    handleInputBasic = (e) => {
        let newElement = this.props.elementsUsed[this.props.focus]
        if(e.target.name == 'label'){
            newElement.label = e.target.value
        }else if(e.target.name == 'placeholder'){
            newElement.placeholder = e.target.value
        }else if(e.target.name == 'required'){
            newElement.required = true
        }
        this.props.updateElement(newElement, this.props.focus)
    }
    
    handleUpdateTextArea = (e) => {
        let newElement = this.props.elementsUsed[this.props.focus]
        if(e.target.name == 'label'){
            newElement.label = e.target.value
        }else if(e.target.name == 'placeholder'){
            newElement.placeholder = e.target.value
        }else if(e.target.name == 'required'){
            newElement.required = true
        }else if(e.target.name == 'rows'){
            newElement.rows = e.target.value
        }else if(e.target.name == 'col'){
            newElement.col = e.target.value
        }
        this.props.updateElement(newElement, this.props.focus)
    }
    
    handleUpdateSelect = (e) => {
        let newElement = this.props.elementsUsed[this.props.focus]
        if(e.target.name == 'label'){
            newElement.label = e.target.value
        }else if(e.target.name == 'required'){
            newElement.required = true
        }
        this.props.updateElement(newElement, this.props.focus)
    }
    
    handleUpdateBoxAndRadio = (e) => {
        let newElement = this.props.elementsUsed[this.props.focus]
        if(e.target.name == 'label'){
            newElement.label = e.target.value
        }else if(e.target.name == 'required'){
            newElement.required = true
        }
        this.props.updateElement(newElement, this.props.focus)
    }

    handleSelectOption = (e) => {
        return 'test'
    }



    renderSwitch(element)
    {
        switch(element.name)
        {
            case 'Text':
                return (
                    <div>
                        <label>Content</label>
                        <textarea name="content" value={element.content} onChange={this.handleUpdateText} />
                    </div>
                )

            case 'Title':
                return (
                    <div>
                        <label htmlFor="content">{element.name}</label>
                        <input type="text" name="content" value={element.content} onChange={this.handleUpdateTitle} />
                        <label htmlFor="content">Title size</label>
                        <select type="titleSize" name="tag" onChange={this.handleUpdateTitle}>
                            <option value="h1">H1</option>
                            <option value="h2">H2</option>
                            <option value="h3">H3</option>
                            <option value="h4">H4</option>
                        </select>
                    </div>
                )
            
            case 'Submit':
                return (
                    <div>
                        <label>Value</label>
                        <input type="text" name="value" onChange={this.handleUpdateSubmit} value={element.value} />
                    </div>
                )

            case 'Text Input':
            case 'Date':
            case 'Email':
            case 'Phone':
            case 'Link':
            case 'Password':
                return (
                    <div>
                        <label>Label</label>
                        <input type="text" name="label" onChange={this.handleInputBasic} value={element.label} />
                        <label>Place Holder</label>
                        <input type="text" name="placeholder" onChange={this.handleInputBasic} value={element.placeholder} />
                        <label>Required</label>
                        <input type="checkbox" name="required" onChange={this.handleInputBasic} value={element.required} />
                    </div>
                )

            case 'Text Area':
                return (
                    <div>
                        <label>Label</label>
                        <input type="text" name="label" onChange={this.handleUpdateTextArea} value={element.label} />
                        <label>Place Holder</label>
                        <input type="text" name="placeholder" onChange={this.handleUpdateTextArea} value={element.placeholder} />
                        <label>Row</label>
                        <input type="number" name="rows" onChange={this.handleUpdateTextArea} value={element.rows} />
                        {/* <label>Columns</label>
                        <input type="number" name="col" onChange={this.handleUpdateTextArea} value={element.col} /> */}
                        <label>Required</label>
                        <input type="checkbox" name="required" onChange={this.handleUpdateTextArea} value={element.required} />
                    </div>
                )

            case 'Select':
                return (
                    <div>
                        <label htmlFor="label">Label</label>
                        <input type="text" name="label" onChange={this.handleUpdateSelect} value={element.label} />
                        <label htmlFor="content">Edit options</label>
                        <select name="options">
                            {element.options.map((option, i) => {
                                return <option key={i} onClick={this.handleSelectOption} value={option.value}>{option.content}</option>
                            })}
                        </select>
                        {/* si option selectionné => input modification */}
                        <label>Required</label>
                        <input type="checkbox" name="required" onChange={this.handleUpdateSelect} value={element.required} />
                    </div>
                )

            case 'Check Box':
            case 'Radio Button':
                return (
                    <div>
                        <label htmlFor="label">Label</label>
                        <input type="text" name="label" onChange={this.handleUpdateBoxAndRadio} value={element.label} />
                        <label htmlFor="content">Edit options</label>
                        <select name="options">
                            {element.options.map((option, i) => {
                                return <option key={i} onClick={this.handleSelectOption} value={option.label}>{option.label}</option>
                            })}
                        </select>
                        {/* si option selectionné => input modification */}
                        <label>Required</label>
                        <input type="checkbox" name="required" onChange={this.handleUpdateBoxAndRadio} value={element.required} />
                    </div>
                )
        }

    }


    render(){

        return <div className="">
            <h2>Edit an Element</h2>

            <div>
                {this.props.focus > -1 ? (
                    <div>
                        {this.props.elementsUsed[this.props.focus].label !== undefined ? (
                            <h3>{this.props.elementsUsed[this.props.focus].label}</h3>
                        ) : (
                            <h3>{this.props.elementsUsed[this.props.focus].name}</h3>
                        )}
                        {this.renderSwitch(this.props.elementsUsed[this.props.focus])}
                        <input type="button" onClick={() => this.handleDeleteItem(this.props.elementsUsed[this.props.focus])} className="btn btn-primary" value="Delete Element" />
                        <input type="button" onClick={() => this.handleDuplicateItem(this.props.elementsUsed[this.props.focus])} className="btn btn-primary" value="Duplicate Element" />
                        {/* Moove up/down element */}
                    </div>
                    ) : (
                    <p>Click on an element to update it !</p>
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
        duplicateItem: (element) => {
            dispatch(duplicateItem(element))
        },
        updateElement: (element, id) => {
            dispatch(updateElement(element, id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormEdit);
