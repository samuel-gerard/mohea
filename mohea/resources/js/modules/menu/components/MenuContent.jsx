import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewItem, deleteItem, updateItemValue, updateInputSelected } from "../redux/actions";

class MenuContent extends Component {
    render() {
        return (
            '<h1>hello</h1>'
        )
    }
}

const mapStateToProps = state => {
    return {
        menu: state.menu,
    }
}

const mapDispatchToProps = (dispatch, stateProps) => {
    return {
        addNewItem: (type, idx) => {
            dispatch(addNewItem(type, idx))
        },
        deleteItem: (type, idx) => {
            dispatch(deleteItem(type, idx))
        },
        updateItemValue: (type, val, row, col) => {
            dispatch(updateItemValue(type, val, row, col))
        },
        updateInputSelected: (type, row, col) => {
            dispatch(updateInputSelected(type, row, col))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContent);
