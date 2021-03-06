import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteItem, updateElement, duplicateItem, moveDown, moveUp, addOption, updateOption } from "../redux/actions";
import { lab } from "color-convert";


class FormEdit extends Component {

    state = { selectedOption: null }

    handleDeleteItem(element) {
        this.props.deleteItem(element)
    }

    handleDuplicateItem(element) {
        this.props.duplicateItem(element)
    }

    handleMoveDown(element) {
        this.props.moveDown(element)
    }

    handleMoveUp(element) {
        this.props.moveUp(element)
    }

    handleUpdateText = (e) => {
        let newElement = this.props.focus
        if (e.target.name == 'content') {
            newElement.content = e.target.value
        }
        this.props.updateElement(newElement, this.props.focus)
    }

    handleUpdateTitle = (e) => {
        let newElement = this.props.focus
        if (e.target.name == 'content') {
            newElement.content = e.target.value
        } else if (e.target.name == 'tag') {
            newElement.tag = e.target.value
        }
        this.props.updateElement(newElement, this.props.focus)
    }

    handleUpdateSubmit = (e) => {
        let newElement = this.props.focus
        if (e.target.name == 'value') {
            newElement.value = e.target.value
        }
        this.props.updateElement(newElement, this.props.focus)
    }

    handleInputBasic = (e) => {
        let newElement = this.props.focus
        if (e.target.name == 'label') {
            newElement.label = e.target.value
        } else if (e.target.name == 'placeholder') {
            newElement.placeholder = e.target.value
        } else if (e.target.name == 'required') {
            if (newElement.required == 'required') {
                newElement.required = ''
            } else {
                newElement.required = 'required'
            }
        }
        this.props.updateElement(newElement, this.props.focus)
    }

    handleUpdateTextArea = (e) => {
        let newElement = this.props.focus
        if (e.target.name == 'label') {
            newElement.label = e.target.value
        } else if (e.target.name == 'placeholder') {
            newElement.placeholder = e.target.value
        } else if (e.target.name == 'required') {
            if (newElement.required == 'required') {
                newElement.required = ''
            } else {
                newElement.required = 'required'
            }
        } else if (e.target.name == 'rows') {
            newElement.rows = e.target.value
        } else if (e.target.name == 'col') {
            newElement.col = e.target.value
        }
        this.props.updateElement(newElement, this.props.focus)
    }

    handleUpdateSelect = (e) => {
        let newElement = this.props.focus
        if (e.target.name == 'label') {
            newElement.label = e.target.value
        } else if (e.target.name == 'required') {
            if (newElement.required == 'required') {
                newElement.required = ''
            } else {
                newElement.required = 'required'
            }
        }
        this.props.updateElement(newElement, this.props.focus)
    }

    handleUpdateBoxAndRadio = (e) => {
        let newElement = this.props.focus
        if (e.target.name == 'label') {
            newElement.label = e.target.value
        } else if (e.target.name == 'required') {
            if (newElement.required == 'required') {
                newElement.required = ''
            } else {
                newElement.required = 'required'
            }
        }
        this.props.updateElement(newElement, this.props.focus)
    }

    handleSelectOption(option) {
        this.setState({ selectedOption: option })
    }

    handleAddOptionCheckbox() {
        let id = this.props.focus.options.length
        var newOption = { id: id, tag: "input", type: "checkbox", label: "My New Option" }
        this.props.addOption(this.props.focus, newOption)
    }

    handleAddOptionRadio() {
        let id = this.props.focus.options.length
        var newOption = { id: id, tag: "input", type: "radio", label: "My New Option" }
        this.props.addOption(this.props.focus, newOption)
    }

    handleAddOptionForSelect() {
        let id = this.props.focus.options.length
        var newOption = { id: id, tag: "option", type: "select", value: "My New Option", content: "My New Option" }
        this.props.addOption(this.props.focus, newOption)
    }

    handleUpdateOption = (e) => {
        let newOptionEdit = this.state.selectedOption

        switch (e.target.name) {
            case "update_radio":
                newOptionEdit.label = e.target.value
                break;
            case "update_checkbox":
                newOptionEdit.label = e.target.value
                break;
            case "update_select":
                newOptionEdit.content = e.target.value
                newOptionEdit.value = e.target.value
                break;

            default:
                break;
        }

        this.setState({ selectedOption: newOptionEdit })
        this.props.updateOption(this.props.focus, this.state.selectedOption, e.target.value)
    }



    renderSwitch(element) {

        var requiredId = "required_id_" + element.id

        switch (element.name) {
            case 'Text':
                var textAreaId = "textarea_" + element.id
                return (
                    <div className="form-group">
                        <label htmlFor={textAreaId} className="d-block">Content</label>
                        <textarea className="form-control" name="content" value={element.content} id={textAreaId} onChange={this.handleUpdateText} />
                    </div>
                )

            case 'Title':
                var contentId = "content_" + element.id
                var selectId = "select_" + element.id
                return (
                    <div className="form-group">
                        <div className="form-group">
                            <label htmlFor={contentId}>{element.name}</label>
                            <input className="form-control" id={contentId} type="text" name="content" value={element.content} onChange={this.handleUpdateTitle} />
                        </div>
                        <div className="form-group">
                            <label htmlFor={selectId}>Title size</label>
                            <select className="form-control" id={selectId} type="titleSize" name="tag" value={element.tag} onChange={this.handleUpdateTitle}>
                                <option value="h1">H1</option>
                                <option value="h2">H2</option>
                                <option value="h3">H3</option>
                                <option value="h4">H4</option>
                            </select>
                        </div>
                    </div>
                )

            case 'Submit':
                var submitId = "submit_" + element.id
                return (
                    <div className="form-group">
                        <label htmlFor={submitId}>Value</label>
                        <input className="form-control" id={submitId} type="text" name="value" onChange={this.handleUpdateSubmit} value={element.value} />
                    </div>
                )

            case 'Text Input':
            case 'Date':
            case 'Email':
            case 'Phone':
            case 'Link':
            case 'Password':
                var labelId = "label_" + element.id
                var placeholderId = "placeholder_" + element.id
                return (
                    <div className="form-group">
                        <div className="form-group">
                            <label htmlFor={labelId}>Label</label>
                            <input className="form-control" id={labelId} type="text" name="label" onChange={this.handleInputBasic} value={element.label} />
                        </div>
                        <div className="form-group">
                            <label htmlFor={placeholderId}>Place Holder</label>
                            <input className="form-control" id={placeholderId} type="text" name="placeholder" onChange={this.handleInputBasic} value={element.placeholder} />
                        </div>
                        <div>
                            <input type="checkbox" id={requiredId} onChange={this.handleInputBasic} name="required" checked={element.required} />
                            <label className="form-check-label" htmlFor={requiredId}>Required</label>
                        </div>
                    </div>
                )

            case 'Text Area':
                var labelTextAreaId = "label_textarea_" + element.id
                var placeholderTextareaId = "placeholder_textarea_" + element.id
                var rowId = "row_" + element.id
                return (
                    <div className="form-group">
                        <div className="form-group">
                            <label htmlFor={labelTextAreaId}>Label</label>
                            <input className="form-control" id={labelTextAreaId} type="text" name="label" onChange={this.handleUpdateTextArea} value={element.label} />
                        </div>
                        <div className="form-group">
                            <label htmlFor={placeholderTextareaId}>Place Holder</label>
                            <input className="form-control" id={placeholderTextareaId} type="text" name="placeholder" onChange={this.handleUpdateTextArea} value={element.placeholder} />
                        </div>
                        <div className="form-group">
                            <label htmlFor={rowId}>Row</label>
                            <input className="form-control" id={rowId} type="number" name="rows" onChange={this.handleUpdateTextArea} value={element.rows} />
                        </div>
                        <div>
                            <input type="checkbox" id={requiredId} onChange={this.handleUpdateTextArea} name="required" checked={element.required} />
                            <label className="form-check-label" htmlFor={requiredId}>Required</label>
                        </div>
                    </div>
                )

            case 'Select':
                var labelSelectId = "label_select_" + element.id
                var selectContentId = "content_select_" + element.id
                var updateOptionId = "update_option_" + element.id
                return (
                    <div className="form-group">
                        <div className="form-group">
                            <label htmlFor={labelSelectId}>Label</label>
                            <input className="form-control" id={labelSelectId} type="text" name="label" onChange={this.handleUpdateSelect} value={element.label} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="button" name="newOption" onClick={() => this.handleAddOptionForSelect()} className="button" value="Add a new option" />
                        </div>
                        <div className="form-group">
                            <label htmlFor={selectContentId}>Edit options</label>
                            <select className="custom-select" id={selectContentId} name="options">
                                {element.options.map((option, i) => {
                                    return <option key={i} onClick={() => this.handleSelectOption(option)} value={option.value}>{option.content}</option>
                                })}
                            </select>
                        </div>

                        {this.state.selectedOption !== null ?
                            this.state.selectedOption.type == 'select' ?
                                (
                                    <div className="form-group">
                                        <label htmlFor={updateOptionId}>Update option</label>
                                        <input className="form-control" id={updateOptionId} name="update_select" type="text" value={this.state.selectedOption.content} onChange={this.handleUpdateOption} />
                                    </div>
                                ) : null
                            : null}

                        <div>
                            <input type="checkbox" id={requiredId} onChange={this.handleUpdateSelect} name="required" checked={element.required} />
                            <label className="form-check-label" htmlFor={requiredId}>Required</label>
                        </div>
                    </div>
                )

            case 'Check Box':
                var labelCheckId = "label_checkbox_" + element.id
                var optionCheckId = "options_checkbox_" + element.id
                var updateOptionId = "update_option_checkbox_" + element.id
                return (
                    <div className="form-group">
                        <div className="form-group">
                            <label htmlFor={labelCheckId}>Label</label>
                            <input className="form-control" id={labelCheckId} type="text" name="label" onChange={this.handleUpdateBoxAndRadio} value={element.label} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="button" name="newOption" onClick={() => this.handleAddOptionCheckbox()} className="button" value="Add a new option" />
                        </div>
                        <label htmlFor={optionCheckId}>Edit options</label>
                        <div className="form-group">
                            <select className="form-control" id={optionCheckId} name="options">
                                {element.options.map((option, i) => {
                                    return <option key={i} onClick={() => this.handleSelectOption(option)} value={option.label}>{option.label}</option>
                                })}
                            </select>
                        </div>
                        {this.state.selectedOption !== null ?
                            this.state.selectedOption.type == 'checkbox' ?
                                (
                                    <div className="form-group">
                                        <label htmlFor={updateOptionId}>Update option</label>
                                        <input className="form-control" id={updateOptionId} name="update_checkbox" type="text" value={this.state.selectedOption.label} onChange={this.handleUpdateOption} />
                                    </div>
                                ) : null
                            : null}
                        <div>
                            <input type="checkbox" id={requiredId} onChange={this.handleUpdateBoxAndRadio} name="required" checked={element.required} />
                            <label className="form-check-label" htmlFor={requiredId}>Required</label>
                        </div>
                    </div>
                )

            case 'Radio Button':
                var labelRadioId = "label_radiobutton_" + element.id
                var optionsId = "options_radiobutton_" + element.id
                var updateOptionId = "udpate_option_radiobutton_" + element.id
                return (
                    <div className="form-group">
                        <div className="form-group">
                            <label htmlFor={labelRadioId}>Label</label>
                            <input className="form-control" id={labelRadioId} type="text" name="label" onChange={this.handleUpdateBoxAndRadio} value={element.label} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="button" name="newOption" onClick={() => this.handleAddOptionRadio()} className="button" value="Add a new option" />
                        </div>
                        <div className="form-group">
                            <div className="form-group">
                                <label htmlFor={optionsId}>Choose an option to edit</label>
                                <select className="form-control" id={optionsId} name="options">
                                    {element.options.map((option, i) => {
                                        return <option key={i} onClick={() => this.handleSelectOption(option)} value={option.label}>{option.label}</option>
                                    })}
                                </select>
                            </div>
                            {this.state.selectedOption !== null ?
                                this.state.selectedOption.type == 'radio' ?
                                    (
                                        <div className="form-group">
                                            <label htmlFor={updateOptionId}>Edit option</label>
                                            <input className="form-control" name="update_radio" id={updateOptionId} type="text" value={this.state.selectedOption.label} onChange={this.handleUpdateOption} />
                                        </div>
                                    ) : null
                                : null}
                        </div>
                        <div>
                            <input type="checkbox" id={requiredId} onChange={this.handleUpdateBoxAndRadio} name="required" checked={element.required} />
                            <label className="form-check-label" htmlFor={requiredId}>Required</label>
                        </div>
                    </div>
                )
        }

    }

    getFocusById(id) {
        var focus = -1
        this.props.elementsUsed.map((element, i) => {
            if (id == element.id) {
                focus = element.id
            }
        })
        return focus
    }


    render() {
        return <span>
            {this.props.focus.id > -1 ? (
                <div id="context-menu">
                    <div className="group-row">
                        <div>
                            <h3>Item options</h3>
                            <form>
                                {this.renderSwitch(this.props.focus)}
                            </form>
                            <button type="button" onClick={() => this.handleMoveDown(this.props.focus)} className="button round primary" title="Move up"><i className="fas fa-arrow-up"></i></button>
                            <button type="button" onClick={() => this.handleMoveUp(this.props.focus)} className="button round secondary" title="Move down"><i className="fas fa-arrow-down"></i></button>
                            <button type="button" onClick={() => this.handleDuplicateItem(this.props.focus)} className="button round" title="Duplicate"><i className="fas fa-clone"></i></button>
                            <button type="button" onClick={() => this.handleDeleteItem(this.props.focus)} className="button round" title="Delete"><i className="fas fa-trash-alt"></i></button>
                        </div>
                    </div>
                </div >
            ) : (
                    <span></span>
                )}
        </span>
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
        addOption: (element, option) => {
            dispatch(addOption(element, option))
        },
        updateOption: (element, option, value) => {
            dispatch(updateOption(element, option, value))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormEdit);
