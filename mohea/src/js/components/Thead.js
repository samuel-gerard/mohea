import React from 'react';

class Thead extends React.Component {
    deleteType(item) {
        const val = Object.assign({}, item)
        delete val.type
        return val
    }

    render() {
        const items = Object.values(this.props.items)

        return (
            <thead>
                {items.map( (item, i) =>
                    <tr key={'lineHead' + i}>
                        {Object.values(this.deleteType(item)).map( (item, i) =>
                            <th key={'item' + i}>{item}</th>
                        )}
                    </tr>
                )}
            </thead>)
    }
}

export default Thead
