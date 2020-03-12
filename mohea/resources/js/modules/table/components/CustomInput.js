import React from "react";
import { connect } from "react-redux";
import { updateInputStyle } from "../redux/actions";

const CustomInput = (props) => {
  const details = props.inputSelected
  let cell = {}

  if (details.type) {
    let style = props.tableau[details.type][details.row][details.col].style
    if (style) {
      style = Object.assign({}, style);
      style.fontSize = style.fontSize ? style.fontSize.replace('px', '') : ''
      cell = style
    }
  }

  const handleStyle = (e) => {
    let val = e.target.dataset.key === 'fontSize' ? e.target.value + 'px' : e.target.value
    if (e.target.type === 'checkbox') val = e.target.checked ? e.target.value : ''

    cell[e.target.dataset.key] = val
    props.updateInputStyle(details.type, cell, details.row, details.col)
  }

  if (details.type) {
    return (
      <div id="context-menu">
        <div className="group-row">
          <div>
            <h3>Item options</h3>
            <div className="form-group">
              <label htmlFor="color-text">Text color</label>
              <input type="color"
                id="color-text"
                onChange={handleStyle}
                value={cell.color ? cell.color : '#000000'}
                data-key="color" />
              <label htmlFor="color-background">Background color</label>
              <input type="color"
                id="color-background"
                onChange={handleStyle}
                value={cell.backgroundColor ? cell.backgroundColor : '#ffffff'}
                data-key="backgroundColor" />
            </div>
            <div className="form-group">
              <label htmlFor="text-align">Alignment</label>
              <select id="text-align"
                onChange={handleStyle}
                value={cell.textAlign ? cell.textAlign : 'left'}
                className="form-control"
                data-key="textAlign">
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
                <option value="justify">Justify</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="font-size">Font size</label>
              <input type="number"
                id="font-size"
                onChange={handleStyle}
                value={cell.fontSize ? cell.fontSize : '14'}
                className="form-control"
                data-key="fontSize" />
              <span>px</span>
            </div>
            <div className="group-row">
              <div className="form-group">
                <input type="checkbox"
                  id="text-decoration"
                  onChange={handleStyle}
                  value='underline'
                  checked={cell.textDecoration ? true : false}
                  data-key="textDecoration" />
                <label htmlFor="text-decoration">Underlined</label>
              </div>
              <div className="form-group">
                <input type="checkbox"
                  id="font-style"
                  onChange={handleStyle}
                  value='italic'
                  checked={cell.fontStyle ? true : false}
                  data-key="fontStyle" />
                <label htmlFor="font-style">Italic</label>
              </div>
              <div className="form-group">
                <input type="checkbox"
                  id="font-weight"
                  onChange={handleStyle}
                  value='bold'
                  checked={cell.fontWeight ? true : false}
                  data-key="fontWeight" />
                <label htmlFor="font-weight">Bold</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (<span></span>)
  }
}

const mapStateToProps = state => {
  return {
    tableau: state.tableau,
    inputSelected: state.inputSelected,
  }
}

const mapDispatchToProps = (dispatch, stateProps) => {
  return {
    updateInputStyle: (type, cell, row, col) => {
      dispatch(updateInputStyle(type, cell, row, col))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomInput);
