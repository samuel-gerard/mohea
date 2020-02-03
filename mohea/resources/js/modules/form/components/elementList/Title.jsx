import React from "react";

class Title extends React.Component {


    constructor(props) {
        super(props)
        this.state = { 
            element: { id: 2, name: "Title", tag: "h1", className:"moheaTitle", content: "My New Title" },
            id: 1, name: "Text", tag: "p", className:"moheaText", content: this.props.currentElement.content, edition: '', form: '', 
            element: this.props.currentElement, 
            display: this.props.display,
            generated: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event)
    {
        this.setState({content: event.target.value})
        this.props.onUpdate(this.state.content)
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
            return (
                <form>
                    <label for="content">{this.state.element.name}</label>
                        <input type="text" onChange={this.handleChange} value={this.state.content} />
                        <label for="content">Title size</label>
                        <select type="titleSize">
                            <option value="h1">H1</option>
                            <option value="h2">H2</option>
                            <option value="h3">H3</option>
                            <option value="h4">H4</option>
                        </select>
                </form>
            )
        }else if(display == 'form'){
            return <h1>{this.props.currentElement.content}</h1>
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


export default Title;
