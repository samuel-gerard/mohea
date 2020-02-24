import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteItem, updateElement, duplicateItem, moveDown, moveUp } from "../redux/actions";
import { lab } from "color-convert";


class FormEdit extends Component {

    state = {selectedOption: null}

    handleDeleteItem(element)
    {
        this.props.deleteItem(element)
    }

    handleDuplicateItem(element)
    {
        this.props.duplicateItem(element)
    }

    handleMoveDown(element)
    {
        this.props.moveDown(element)
    }

    handleMoveUp(element)
    {
        this.props.moveUp(element)
    }

    handleUpdateText = (e) => {
        let newElement = this.props.focus
        if(e.target.name == 'content'){
            newElement.content = e.target.value
        }
        this.props.updateElement(newElement, this.props.focus)
    }
    
    handleUpdateTitle = (e) => {
        let newElement = this.props.focus
        if(e.target.name == 'content'){
            newElement.content = e.target.value
        }else if(e.target.name == 'tag'){
            newElement.tag = e.target.value
        }
        this.props.updateElement(newElement, this.props.focus)
    }
    
    handleUpdateSubmit = (e) => {
        let newElement = this.props.focus
        if(e.target.name == 'value'){
            newElement.value = e.target.value
        }
        this.props.updateElement(newElement, this.props.focus)
    }
    
    handleInputBasic = (e) => {
        let newElement = this.props.focus
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
        let newElement = this.props.focus
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
        let newElement = this.props.focus
        if(e.target.name == 'label'){
            newElement.label = e.target.value
        }else if(e.target.name == 'required'){
            newElement.required = true
        }
        this.props.updateElement(newElement, this.props.focus)
    }
    
    handleUpdateBoxAndRadio = (e) => {
        let newElement = this.props.focus
        if(e.target.name == 'label'){
            newElement.label = e.target.value
        }else if(e.target.name == 'required'){
            newElement.required = true
        }
        this.props.updateElement(newElement, this.props.focus)
    }

    handleSelectOption(option) {
        this.setState({ selectedOption: option })
    }
    
    handleUpdateOptionForCheckboxAndRadio = (e) => {
        let newElement = this.props.focus
        newElement.options[this.state.selectedOption.id].label = e.target.value
        this.props.updateElement(newElement, this.props.focus)
    }

    handleAddOptionCheckbox(){
        let newElement = this.props.focus
        let id = this.props.focus.options.length
        var newOption = { id: id, tag: "input", type: "checkbox", label: "My New Option" }
        newElement.options.push(newOption)
        this.props.updateElement(newElement, this.props.focus)
    }

    handleAddOptionRadio(){
        let newElement = this.props.focus
        let id = this.props.focus.options.length
        var newOption = { id: id, tag: "input", type: "radio", label: "My New Option" }
        newElement.options.push(newOption)
        this.props.updateElement(newElement, this.props.focus)
    }
    
    handleAddOptionForSelect(){
        let newElement = this.props.focus
        let id = this.props.focus.options.length
        var newOption = { id: id, tag: "option", value: "My New Option", content: "My New Option"}
        newElement.options.push(newOption)
        this.props.updateElement(newElement, this.props.focus)
    }

    handleUpdateOptionForSelect = (e) => {
        let newElement = this.props.focus
        newElement.options[this.state.selectedOption.id].content = e.target.value
        newElement.options[this.state.selectedOption.id].value = e.target.value
        this.props.updateElement(newElement, this.props.focus)
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
                        <select type="titleSize" name="tag" value={element.tag} onChange={this.handleUpdateTitle}>
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
                        <input type="checkbox" name="required" onChange={this.handleInputBasic} checked={element.required} />
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
                        <label>Required</label>
                        <input type="checkbox" name="required" onChange={this.handleUpdateTextArea} checked={element.required} />
                    </div>
                )

            case 'Select':
                return (
                    <div>
                        <label htmlFor="label">Label</label>
                        <input type="text" name="label" onChange={this.handleUpdateSelect} value={element.label} />
                        <input type="button" name="newOption" onClick={() => this.handleAddOptionForSelect()} className="btn btn-primary" value="Add New Option" />
                        <label htmlFor="content">Edit options</label>
                        <select name="options">
                            {element.options.map((option, i) => {
                                return <option key={i} onClick={() => this.handleSelectOption(option)} value={option.value}>{option.content}</option>
                            })}
                        </select>

                        {this.state.selectedOption !== null ? (
                            <input type="text" value={this.state.selectedOption.content} onChange={this.handleUpdateOptionForSelect} />
                        ) : (
                            <h3>Choose an option to update</h3>
                        )}

                        <label>Required</label>
                        <input type="checkbox" name="required" onChange={this.handleUpdateSelect} checked={element.required} />
                    </div>
                )

            case 'Check Box':
                return (
                    <div>
                        <label htmlFor="label">Label</label>
                        <input type="text" name="label" onChange={this.handleUpdateBoxAndRadio} value={element.label} />
                        <input type="button" name="newOption" onClick={() => this.handleAddOptionCheckbox()} className="btn btn-primary" value="Add New Option" />
                        <label htmlFor="content">Edit options</label>
                        <select name="options">
                            {element.options.map((option, i) => {
                                return <option key={i} onClick={() => this.handleSelectOption(option)} value={option.label}>{option.label}</option>
                            })}
                        </select>
                        {this.state.selectedOption !== null ? (
                            <input type="text" value={this.state.selectedOption.label} onChange={this.handleUpdateOptionForCheckboxAndRadio} />
                        ) : (
                            <h3>Choose an option to update</h3>
                        )}
                        <label>Required</label>
                        <input type="checkbox" name="required" onChange={this.handleUpdateBoxAndRadio} checked={element.required} />
                    </div>
                )

            case 'Radio Button':
                return (
                    <div>
                        <label htmlFor="label">Label</label>
                        <input type="text" name="label" onChange={this.handleUpdateBoxAndRadio} value={element.label} />
                        <input type="button" name="newOption" onClick={() => this.handleAddOptionRadio()} className="btn btn-primary" value="Add New Option" />
                        <label htmlFor="content">Edit options</label>
                        <select name="options">
                            {element.options.map((option, i) => {
                                return <option key={i} onClick={() => this.handleSelectOption(option)} value={option.label}>{option.label}</option>
                            })}
                        </select>
                        {this.state.selectedOption !== null ? (
                            <input type="text" value={this.state.selectedOption.label} onChange={this.handleUpdateOptionForCheckboxAndRadio} />
                        ) : (
                            <h3>Choose an option to update</h3>
                        )}
                        <label>Required</label>
                        <input type="checkbox" name="required" onChange={this.handleUpdateBoxAndRadio} checked={element.required} />
                    </div>
                )
        }

    }

    getFocusById(id)
    {
        var focus = -1
        this.props.elementsUsed.map((element, i) => {
            if(id == element.id)
            {
                focus = element.id
            }
        })
        return focus
    }


    render(){
        return <div className="">
            <h2>Edit an Element</h2>
            <div>
                {this.props.focus.id > -1 ? (
                    <div>
                        {this.props.focus.label !== undefined ? (
                            <h3>{this.props.focus.label}</h3>
                        ) : (
                            <h3>{this.props.focus.name}</h3>
                        )}
                        {this.renderSwitch(this.props.focus)}
                        <input type="button" onClick={() => this.handleDeleteItem(this.props.focus)} className="btn btn-danger" value="Delete Element" />
                        <input type="button" onClick={() => this.handleDuplicateItem(this.props.focus)} className="btn btn-primary" value="Duplicate Element" />
                        <input type="button" onClick={() => this.handleMoveDown(this.props.focus)} className="btn btn-primary" value="Down" />
                        <input type="button" onClick={() => this.handleMoveUp(this.props.focus)} className="btn btn-primary" value="Up" />
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
        },
        moveDown: (element) => {
            dispatch(moveDown(element))
        },
        moveUp: (element) => {
            dispatch(moveUp(element))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormEdit);
