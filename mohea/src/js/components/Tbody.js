import React from 'react';

class Tbody extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    deleteType(item) {
        const val = Object.assign({}, item)
        delete val.type
        return val
    }

    componentDidUpdate(prevProps) {
        console.log('body', this.props.items);
    }

    handleChange(event) {
        const split = event.target.id.split('/')
        const col = split[1]
        const row = split[0];
        this.props.items[row][col] = event.target.value
    }

    render() {
        const items = Object.values(this.props.items)

        return (
            <tbody>
                {items.map( (item, i) =>
                    <tr key={'lineBody' + i} id={'tb-tr-' + i}>
                        {Object.values(this.deleteType(item)).map( (item, j) =>
                            <td key={'item' + j}>
                                <input type='text' id={i + '/' + j} onChange={this.handleChange}/>
                            </td>
                        )}
                    </tr>
                )}
            </tbody>)
    }
}

export default Tbody
