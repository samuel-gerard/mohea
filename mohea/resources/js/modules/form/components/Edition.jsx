import React from "react";

import Text from "./elementList/Text";
import Title from "./elementList/Title";


class Edition extends React.Component {

  constructor(props) {
    super(props)
    this.state = { focus: this.props.focusedElement, field: 'salut' }
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  // code à la place de content
  handleUpdate(content)
  {
    // console.log(content)
    this.props.onUpdateElement(content)
  }

  editionMarkup(focus)
  {
    switch(focus.name)
    {
      case 'Text':
        return (<Text display={'edition'} currentElement={focus} onUpdate={this.handleUpdate.bind(this)} />)

      case 'Title':
        return <Title display={'edition'} currentElement={focus} onUpdate={this.handleUpdate.bind(this)} />
      
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

        <h3>{this.props.focusedElement.name}</h3>

        {/* <div dangerouslySetInnerHTML={this.editionMarkup(this.props.focusedElement)} /> */}
        <div>{this.editionMarkup(this.props.focusedElement)}</div>


      </div>

    );

  }
}

export default Edition;
