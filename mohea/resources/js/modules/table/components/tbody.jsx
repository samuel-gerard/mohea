const React = require("react");

class Tbody extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleAddRow = this.handleAddRow.bind(this)
    }

    handleChange(event) {
        const split = event.target.id.split('/')
        const col = split[1]
        const row = split[0];
        this.props.items[row][col] = event.target.value
    }

    handleAddRow() {
        console.log(this.props)
    }

    render() {
        const group = Object.values(this.props.items)

        return (
            <tbody>
                {group.length === 0 &&
                <tr>
                    <td>
                        <input type="button" className="btn btn-secondary" value="Body +" onClick={this.props.addRow} />                    
                    </td>
                </tr>
                }
                {group.map( (items, i) => {
                    <tr key={'lineBody' + i} id={'tb-tr-' + i}>
                        <td>
                            {i === (group.length - 1) &&
                                <input type="button" className="btn btn-secondary" value="Body +" onClick={this.props.addRow} />
                            }
                        </td>
                        {Object.values(items).map( (item, j) => {
                            return (
                                <td key={'item' + j}>
                                    <input type='text' id={i + '/' + j} onChange={this.handleChange}/>
                                </td>
                            );
                        })}
                    </tr>
                })}
            </tbody>)
    }
}


module.exports = Tbody;
