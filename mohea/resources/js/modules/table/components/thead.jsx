const React = require("react");

class Thead extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    deleteType(item) {
        const val = Object.assign({}, item)
        delete val.type
        return val
    }

    handleChange(event) {
        const split = event.target.id.split('/')
        const col = split[1]
        const row = split[0];
        this.props.items[row][col] = event.target.value
    }

    render() {
        const group = Object.values(this.props.items)

        return (
            <thead>
                {group.length === 0 &&
                <tr>
                    <td>
                        <input type="button" className="btn btn-secondary" value="Head +" onClick={this.props.addRow} />                    
                    </td>
                </tr>
                }
                {group.map( (items, i) => {
                    <tr key={'lineHead' + i}>
                        <td>
                            {i === (group.length - 1) &&
                                <input type="button" className="btn btn-secondary" value="Head +" onClick={this.props.addRow} />
                            }
                        </td>
                        {Object.values(items).map( (item, j) => {
                            return (
                            <td key={'head' + j}>
                                <input type='text' id={i + '/' + j} onChange={this.handleChange}/>
                            </td>
                            );
                        })}
                    </tr>
                })}
            </thead>)
    }
}

module.exports = Thead;
