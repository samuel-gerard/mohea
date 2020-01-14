import React from "react";


class Form extends React.Component {

  setMarkup(element)
  {
    return {__html: 
      '<label for="name">'+element.name+'</label>'+
      '<'+element.tag+' type="'+element.type+'" className="form-control" id="'+element.name+'_" name="'+element.name+'" '+element.require+'></'+element.tag+'>'    };
  }


  render() {

    return (
      <div className="form_box">
        <form>

          <h2>Your form</h2>

          {this.props.usedElements.map(element => (
            <div className="form-group" dangerouslySetInnerHTML={this.setMarkup(element)} />
          ))}

        </form>
      </div>
    );
  }
}

export default Form;
