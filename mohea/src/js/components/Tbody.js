import React from 'react';

class Tbody extends React.Component {
    deleteType(item) {
        const val = Object.assign({}, item)
        delete val.type
        return val
    }

    render() {
        const items = Object.values(this.props.items)

        return (
            <tbody>
                {items.map( (item, i) =>
                    <tr key={'lineBody' + i}>
                        {Object.values(this.deleteType(item)).map( (item, i) =>
                            <td key={'item' + i}>{item}</td>
                        )}
                    </tr>
                )}
            </tbody>)
    }
}

export default Tbody
