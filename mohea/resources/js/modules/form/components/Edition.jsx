import React from "react";

class Edition extends React.Component {

  state = { focus: this.props.focusedElement }

  editionMarkup(focus)
  {
    switch(focus.name)
    {
      case 'Text':
        return {__html: 
          '<label for="content">'+focus.name+'</label>'+
          '<textarea rows="5" col="10">'
        }

      case 'Title':
        return {__html: 
          '<label for="content">'+focus.name+'</label>'+
          '<input type="text" onChange={this.handleChangeTitle} />'+
          '<label for="content">Title size</label>'+
          '<select type="titleSize" />'+
            '<option value="h1">H1</option>'+
            '<option value="h2">H2</option>'+
            '<option value="h3">H3</option>'+
            '<option value="h4">H4</option>'+
          '</select>'
        }
      
      case 'Submit':
        return {__html: 
          '<label for="content">Value</label>'+
          '<input type="text" />'
        }

      case 'Text Input':
      case 'Date':
      case 'Email':
      case 'Phone':
      case 'Link':
      case 'Password':
        return {__html: 
          '<label for="content">Label</label>'+
          '<input type="text" />'+
          '<label for="content">Required</label>'+
          '<input type="checkbox" />'+
          '<label for="content">Placeholder</label>'+
          '<input type="text" />'
        }

      case 'Text Area':
        return {__html: 
          '<label for="content">Label</label>'+
          '<input type="text" />'+
          '<label for="content">Required</label>'+
          '<input type="checkbox" />'+
          '<label for="content">Placeholder</label>'+
          '<input type="text" />'
        }

      case 'Select':
        return {__html: 
          '<label for="content">Label</label>'+
          '<input type="text" />'+
          '<label for="content">Edit options</label>'+
          '<select>'+
          focus.options.map(option => (
            '<option value="'+option.value+'">'+option.content+'</option>'
          ))+
          '</select>'+
          '<label for="content">Required</label>'+
          '<input type="checkbox" />'+
          '<label for="content">Placeholder</label>'+
          '<input type="text" />'
        }

      case 'Check Box':
      case 'Radio Button':
        return {__html: 
          '<label for="content">Label</label>'+
          '<input type="text" />'+
          '<select>'+
          focus.options.map(option => (
            '<option value="'+option.label+'">'+option.label+'</option>'
          ))+
          '</select>'+
          '<label for="content">Required</label>'+
          '<input type="checkbox" />'+
          '<label for="content">Placeholder</label>'+
          '<input type="text" />'
        }

      
    }
  }

  render() {

    return (

      <div className="edition_box">
        <h2>Edit element</h2>

        <h3>{this.props.focusedElement.label}</h3>

        <p>Copy element</p>
        <p>Delete element</p>

        <div dangerouslySetInnerHTML={this.editionMarkup(this.props.focusedElement)} />
        
      </div>

    );

  }
}

export default Edition;
