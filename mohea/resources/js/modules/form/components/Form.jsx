import React from "react";

import Text from "./elementList/Text";
import Title from "./elementList/Title";


class Form extends React.Component {

  setMarkup(element)
  {
    
    switch(element.name)
    {
      case 'Text' :
        // ajouter fonction dans elem text ?
        // afficher les infos de l'element précis passé en param // avec id ? // ou passer l'element entier (actualElement) ?
        return <Text display={'form'} currentElement={element} />

      case 'Title':
        return <Title display={'form'} currentElement={element} />

      case 'Submit':
        return {__html:
          '<'+element.tag+' type="'+element.type+'" />' 
        }
        
      case 'Text Input':
      case 'Date':
      case 'Email':
      case 'Phone':
      case 'Link':
      case 'Password':
        return {__html:
          '<label for="label">'+element.label+'</label>'+
          '<'+element.tag+' type="'+element.type+'" placeholder="'+element.placeholder+'" '+element.required+' />' 
        }

      case 'Text Area':
        return {__html:
          '<label for="label">'+element.label+'</label>'+
          '<'+element.tag+' rows="'+element.rows+'" col="'+element.col+'" placeholder="'+element.placeholder+'" '+element.required+' />' 
        }
        
      case 'Select':
        return {__html:
          '<label for="label">'+element.label+'</label>'+
          '<'+element.tag+' '+element.required+' >'+
            element.options.map(option => (
              '<option value="'+option.value+'">'+option.content+'</option>'
            ))+
          '</'+element.tag+'>'
          }

      case 'Check Box':
      case 'Radio Button':
        return {__html:
          '<label for="label">'+element.label+'</label>'+
          '<'+element.tag+' '+element.required+' >'+
            element.options.map(option => (
              '<div>'+
                '<'+option.tag+' type="'+option.type+'">'+option.label+'</'+option.tag+'>'+
              '</div>'
            ))+
          '</'+element.tag+'>'
          }

    }
  
  }


  render() {

    return (
      <div className="form_box">
        <form>

          <h2>Your form</h2>

          {this.props.usedElements.map((element, i) => (
            // <div className="form-group" onClick={() => this.props.onFocusElement(element)} dangerouslySetInnerHTML={this.setMarkup(element)} />
            <div className="form-group" key={i} onClick={() => this.props.onFocusElement(element)}>{this.setMarkup(element)}</div>
          ))}

        </form>
      </div>
    );
  }
}

export default Form;
