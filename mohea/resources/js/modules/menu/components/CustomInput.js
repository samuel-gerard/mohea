import React from "react";
import { connect } from "react-redux";
import { updateInputStyle, updateInputOptions } from "../redux/actions";

const CustomInput = (props) => {
  const details = props.inputSelected
  let cell = {}
  let item = {}

  if(( details.parent_idx >= 0 && props.menu[details.parent_idx].children[details.idx] ) || (details.idx && props.menu[details.idx])) {
    item = details.parent_idx >= 0 ? props.menu[details.parent_idx].children[details.idx] : props.menu[details.idx]
    let style = item.style
    if(style) {
      style = Object.assign({}, style);
      style.fontSize = style.fontSize ? style.fontSize.replace('px', '') : ''
      cell = style
    }
  }

  const handleStyle = (e) => {
    let val = e.target.dataset.key === 'fontSize' ? e.target.value + 'px' : e.target.value
    if(e.target.type === 'checkbox') val = e.target.checked ? e.target.value : ''

    cell[e.target.dataset.key] = val
    props.updateInputStyle(cell, details.parent_idx, details.idx)
  }

  const handleLink = (e) => {
    props.updateInputOptions('link', e.target.value, details.parent_idx, details.idx)
  }

  const handleTarget = (e) => {
    props.updateInputOptions('target', e.target.checked ? e.target.value : '_self', details.parent_idx, details.idx)
  }

  const handleTitle = (e) => {
    props.updateInputOptions('title', e.target.value, details.parent_idx, details.idx)
  }

  if(details.idx) {
    return (<div>
      <h1>Style</h1>
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
      <label htmlFor="text-align" >Alignment</label>
      <select id="text-align"
        onChange={handleStyle}
        value={cell.textAlign ? cell.textAlign : 'left'}
        data-key="textAlign">
        <option value="left" >Left</option>
        <option value="center" >Center</option>
        <option value="right" >Right</option>
        <option value="justify" >Justify</option>
      </select>
      <div className="from-group">
        <label htmlFor="font-size">Font size (px)</label>
        <input type="number"
          id="font-size"
          onChange={handleStyle}
          value={cell.fontSize ? cell.fontSize : '14'}
          data-key="fontSize" />
      </div>
      <div className="from-group">
        <label htmlFor="text-decoration">Underline</label>
        <input type="checkbox"
          id="text-decoration"
          onChange={handleStyle}
          value='underline'
          checked={cell.textDecoration ? true : false}
          data-key="textDecoration" />
      </div>
      <div className="from-group">
        <label htmlFor="font-style">Italic</label>
        <input type="checkbox"
          id="font-style"
          onChange={handleStyle}
          value='italic'
          checked={cell.fontStyle ? true : false}
          data-key="fontStyle" />
      </div>
      <div className="from-group">
        <label htmlFor="font-weight">Bold</label>
        <input type="checkbox"
          id="font-weight"
          onChange={handleStyle}
          value='bold'
          checked={cell.fontWeight ? true : false}
          data-key="fontWeight" />
      </div>

      <h2>Options</h2>
      <div className="from-group">
        <label htmlFor="option-target">Open in a new tab</label>
        <input type="checkbox"
          onChange={handleTarget}
          value='_blank'
          id="option-target"
          checked={item.target === '_blank' ? true : false} />
      </div>
      <div className="from-group">
        <label htmlFor="option-link">URL</label>
        <input type="text"
          onChange={handleLink}
          placeholder="http:// or https://"
          id="option-link"
          value={item.link} />
      </div>
      <div className="from-group">
        <label htmlFor="option-title">Link title</label>
        <input type="text"
          onChange={handleTitle}
          id="option-title"
          value={item.title} />
      </div>
    </div>)
  }
  else {
    return (<div>
      <p>Select an item to customize.</p>
    </div>)
  }
}

const mapStateToProps = state => {
  return {
    menu : state.menu,
    inputSelected : state.inputSelected,
  }
}

const mapDispatchToProps = (dispatch, stateProps) => {
  return {
    updateInputStyle: (cell, parent_idx, idx) => {
      dispatch(updateInputStyle(cell, parent_idx, idx))
    },
    updateInputOptions: (type, value, parent_idx, idx) => {
      dispatch(updateInputOptions(type, value, parent_idx, idx))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomInput);
