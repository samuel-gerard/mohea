import React from "react";
import nextId from "react-id-generator";


class Text extends React.Component {


    constructor(props) {
        super(props)
        this.state = { 
            element: { id: "", name: "", tag: "", className:"", content: "" },
            id: nextId(), name: "Text", tag: "p", className:"moheaText", content: this.props.currentElement.content, edition: '', form: '', 
            element: this.props.currentElement, 
            display: this.props.display,
            generated: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    /* constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = { 
            id: 1, 
            name: "Text", 
            content: this.props.currentElement,
            editionCode: '', 
            formCode: '', 
            display: this.props.display
        }
    } */

    handleChange(event)
    {
        this.setState({content: event.target.value})
        
        
        // console.log(this.props.currentElement)
        // console.log(this.state.element)

        // element est null dans le state au départ !
        /* const elem = [...this.state.element]
        elem.content = event.target.value
        this.setState({element: elem})
        console.log(this.state.element.content) */


        this.props.onUpdate(this.state.content)

        // Renvoyer infos modifiées avec champs ETC
        
    }

    handleCreate(){
        const element = [...this.state.element];
        element.id = this.state.generated 
        this.setState({element});
        var count = this.state.generated
        count = count + 1
        this.setState({generated: count})
        this.props.onCreate(this.state.element)
    }

    handleDisplay(display){
        if(display == 'edition'){
            // console.log(this.state.element)
            return (
                <form>
                    <label for="content">{this.state.name}</label>
                    <textarea rows="5" col="10" onChange={this.handleChange} defaultValue={this.state.content} />
                </form>
            )
        }else if(display == 'form'){
            // return <p>{this.state.content}</p>
            return <p>{this.props.currentElement.content}</p>
        }else if(display == 'create'){
            this.handleCreate()
        }
    }


    render()
    {
        return (
            <div>
                <div>{this.handleDisplay(this.state.display)}</div>
            </div>

        )
    }

}


export default Text;
