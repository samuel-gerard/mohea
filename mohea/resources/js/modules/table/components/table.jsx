const actions = require("../redux/actions.js"),
      Tbody = require("./tbody.jsx"),
      Thead = require("./thead.jsx"),
      React = require("react"),
      ReactRedux = require("react-redux");

class Table extends React.Component {
  constructor(props) {
    super(props)

    // Bind this class to function needed
    this.handleReset = this.handleReset.bind(this)
    this.handleDeleteCol = this.handleDeleteCol.bind(this)
    this.handleCaption = this.handleCaption.bind(this)
    this.handleName = this.handleName.bind(this)
    this.handleGenerate = this.handleGenerate.bind(this)
  }

  /* ===============================================
  * ADDING FUNCTIONS
  =============================================== */

  // Add a new column to all the table
  // handleAddCol() {
  //   for (let [key, value] of Object.entries(this.props.tableau)) {
  //     value.map((row) => {
  //       row[this.props.nbCol] = ''
  //       return row
  //     })
  //   }

  //   this.setState(state => ({
  //     nbCol: state.nbCol + 1,
  //   }))
  // }

  // Help top add new column for new row
  completeCol(nbCol) {
    const tab = {}
    for (var i = 0; i < nbCol; i++) {
      tab[i] = ''
    }
    return tab
  }

  /* ===============================================
  * DELETE FUNCTIONS
  =============================================== */

  // Delete all the table
  handleReset() {
    this.setState(state => ({
      'tableau': {
        'head': [],
        'body': [],
        'footer': []
      }
    }))
  }

  // Add a new column to all the table
  handleDeleteCol() {
    if (this.props.nbCol <= 1) {
      return false
    }

    for (let [key, value] of Object.entries(this.props.tableau)) {
      value.map((row) => {
        delete row[this.props.nbCol - 1]
        return row
      })
    }

    this.setState(state => ({
      nbCol: state.nbCol - 1
    }))
  }

  handleCaption(event) {
    this.setState({
      'caption': event.target.value
    })
  }

  handleName(event) {
    this.setState({
      'name': event.target.value
    })
  }

  /* ===============================================
  * Get JSON about this table
  =============================================== */

  handleGenerate() {
    console.log(this.props);
  }

  /* ===============================================
  * DISPLAY COMPONENT
  =============================================== */
  render() {
    return <section>
        <h1>{this.props.name || 'New table'}</h1>
        <div className="row">
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="table-name">
                Name for this table
                            </label>
              <input type="text" className="form-control" name="name" id="table-name" onChange={this.handleName} />
            </div>
            <div className="form-group">
              <label htmlFor="table-caption">
                Caption for this table
                            </label>
              <input type="text" className="form-control" name="caption" id="table-caption" onChange={this.handleCaption} />
            </div>
            <div className="form-group d-flex justify-content-between">
              <input type="button" className="btn btn-primary form-control mr-1" value="Generate" onClick={this.handleGenerate} />
              <input type="button" className="w-25 btn btn-primary" value="Reset" onClick={this.handleReset} />
            </div>
            <div className="form-group">
              <input type="button" className="btn btn-secondary mr-1" value="Col -" onClick={this.handleDeleteCol} />
              <input type="button" className="btn btn-secondary" value="Col +" onClick={this.props.addCol.bind(null, this.props.tableau)} />
            </div>
          </div>
          <div className="col-md-9">
            <input type="button" value="Row Body +" onClick={() => this.handleAddRow('body')} />
            <input type="button" value="Row Footer +" onClick={() => this.handleAddRow('footer')} />
            <table>
              <Thead items={this.props.tableau.head} addRow={this.props.addRow.bind(null, this.completeCol(this.props.nbCol), 'head')}/>
              <Tbody items={this.props.tableau.body} addRow={this.props.addRow.bind(null, this.completeCol(this.props.nbCol), 'body')}/>
            </table>
          </div>
        </div>
      </section>
  }
}


module.exports = ReactRedux.connect(
  (state = {}) => state,
  (dispatch, props) => Object.assign({}, props, {
    deleteItem: actions.deleteItem.bind(null, dispatch),
    addRow: actions.addRow.bind(null, dispatch),
    addCol: actions.addCol.bind(null, dispatch)
  })
)(Table);
