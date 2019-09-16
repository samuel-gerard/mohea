import React from 'react'
import Thead from './Thead'
import Tbody from './Tbody'

class Table extends React.Component {
    constructor(props) {
        const defaultTab = {
            'head' : [],
            'body': [],
            'footer': []
        }
        super(props)
        this.state = {
            'nbCol': 1,
            'tableau': defaultTab,
            'caption': ''
        }


        // Bind this class to function needed
        this.handleAddCol = this.handleAddCol.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.handleDeleteCol = this.handleDeleteCol.bind(this)
        this.handleAddRow = this.handleAddRow.bind(this)
        this.handleCaption = this.handleCaption.bind(this)
    }

    /* ===============================================
    * ADDING FUNCTIONS
    =============================================== */

    // Adding Row
    handleAddRow(type) {
        const row = this.completeCol(this.state.nbCol);
        this.state.tableau[type].push(row)
        
        this.setState( state => ({
            'tableau' : state.tableau
        }))
    }

    // Add a new column to all the table
    handleAddCol() {
        for (let [key, value] of Object.entries(this.state.tableau)) {
            value.map( (row) => {
                row[this.state.nbCol] = ''
                return row
            })
        }

        this.setState(state => ({
            nbCol: state.nbCol + 1,
        }))
    }

    // Help top add new column for new row
    completeCol(nbCol) {
        const tab = {}
        for(var i = 0; i < nbCol; i++) {
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
                'head' : [],
                'body': [],
                'footer': []
            }
        }))

        console.log(this.state.tableau)
    }

    // Add a new column to all the table
    handleDeleteCol() {
        if(this.state.nbCol <= 1)
        {
            return false
        }
        
        for (let [key, value] of Object.entries(this.state.tableau)) {
            value.map( (row) => {
                delete row[this.state.nbCol - 1]
                return row
            })
        }      

        this.setState(state => ({
            nbCol: state.nbCol - 1
        }))
    }

    handleCaption(event) {
        this.setState({
            'caption' : event.target.value
        })
    }

    /* ===============================================
    * Get JSON about this table
    =============================================== */

    /* ===============================================
    * DISPLAY COMPONENT
    =============================================== */
    render() {
        return (
            <div>
            <h1>Tableaux</h1>
            <input type="text" name="caption" onChange={this.handleCaption} />
            <input type="button" value="Generate" onClick={this.handleGenerate}/>
            <input type="button" value="Reset" onClick={this.handleReset}/>
            <input type="button" value="Delete last col" onClick={this.handleDeleteCol}/>
                <br/>
                <br/>
            <input type="button" value="Row Head +" onClick={() => this.handleAddRow('head') } />
            <br/>
            <input type="button" value="Row Body +" onClick={() => this.handleAddRow('body') } />
            <br/>
            <input type="button" value="Row Footer +" onClick={() => this.handleAddRow('footer') } />
            <br/>
            <br/>
            <input type="button" value="Col +" onClick={this.handleAddCol}/>

            <table>
                    <Thead items={this.state.tableau.head}/>
                    <Tbody items={this.state.tableau.body}/>
                </table>
            
            </div>
        )
    }
}

export default Table
