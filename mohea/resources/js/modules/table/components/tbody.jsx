import React, {Component} from "react";
import { connect } from "react-redux";

class Tbody extends Component {
  constructor(props) {
    super(props)
    console.log('props body', this.props)
  }

  componentDidUpdate = (prevProps) => {
    console.log('update Tbody')
  }

  handleChange = (event) => {
    const split = event.target.id.split('/')
    const col = split[1]
    const row = split[0];
    this.props.items[row][col] = event.target.value
  }

  render() {
    const bodyItems = this.props.items
    const listItems = bodyItems.length ? (
      Object.values(bodyItems).map( (items, i) => {
        return (
          <tr key={'lineBody' + i} id={'tb-tr-' + i}>
            <td>
              {i === (bodyItems.length - 1) &&
                <input type="button" className="btn btn-secondary" value="Body +" />
              }
            </td>
            {Object.values(items).map( (item, j) => {
              return (
                <td key={'item' + j}>
                  <input type='text' id={i + '/' + j} onChange={this.handleChange} value={item} />
                </td>
                );
              })}
          </tr>
        )
      })
    ) : (
      <tr>
        <td>
          <input type="button" className="btn btn-secondary" value="Body +" />
        </td>
      </tr>
    );

    return (
      <tbody>
        { listItems }
      </tbody>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.tableau.body,
    nbCol: state.nbCol,
  }
}

export default connect(mapStateToProps)(Tbody);