import React from 'react'
import Thead from './Thead'
import Tbody from './Tbody'

class Table extends React.Component {
    constructor(props) {
        const defaultTab = [{
            type: 'body',
            0: 'test'
        }]
        super(props)
        this.state = {
            'nbRow': 1,
            'nbCol': 1,
            'tableau': defaultTab,
            'defaultTab': defaultTab
        }


        // Bind this class to function needed
        this.handleAddHead = this.handleAddHead.bind(this)
        this.handleAddBody = this.handleAddBody.bind(this)
        this.handleAddFooter = this.handleAddFooter.bind(this)
        this.handleAddCol = this.handleAddCol.bind(this)
        this.completeCol = this.completeCol.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }


    
    /* ===============================================
    * ADDING FUNCTIONS
    =============================================== */

    // Adding Head to Thead
    handleAddHead() {
        const head = {
            type: 'head',
            ...this.completeCol()
        }
        this.addRow(head)
    }

    // Adding Body to Tbody
    handleAddBody() {
        const body = {
            type: 'body',
            ...this.completeCol()
        }
        this.addRow(body)
    }
    
    // Adding Footer to Tfoot
    handleAddFooter() {
        const footer = {
            type: 'footer',
            ...this.completeCol()
        }
        this.addRow(footer)
    }

    // Add a new row about the placement in table
    addRow(row) {
        this.setState(state => ({
            nbRow: state.nbRow + 1,
            tableau: state.tableau.concat(row)
        }))
    }

    // Add a new column to all the table
    handleAddCol() {
        const rows = this.state.tableau.map((row, i) =>
            ({
                ...row,
                [this.state.nbCol]: 'test'
            })
        )
        this.setState(state => ({
            nbCol: state.nbCol + 1,
            tableau: rows
        }))
    }

    // Help top add new column for new row
    completeCol() {
        const tab = {}
        for(var i = 0; i < this.state.nbCol; i++) {
            tab[i] = 'test'
        }
        return tab
    }



    /* ===============================================
    * DELETE FUNCTIONS
    =============================================== */

    // Delete all the table
    handleReset() {
        this.setState(state => ({
            'tableau': state.defaultTab
        }))
    }



    /* ===============================================
    * DISPLAY COMPONENT
    =============================================== */
    render() {
        const head = this.state.tableau.filter(word => word.type === 'head')
        const body = this.state.tableau.filter(word => word.type === 'body')
        const footer = this.state.tableau.filter(word => word.type === 'footer')

        return (
        <div>
           <h1>Tableaux</h1>
           <input type="button" value="Reset" onClick={this.handleReset}/>
            <br/>
            <br/>
            <br/>
           <input type="button" value="Row Head +" onClick={this.handleAddHead}/>
           <br/>
           <input type="button" value="Row Body +" onClick={this.handleAddBody}/>
           <br/>
           <input type="button" value="Row Footer +" onClick={this.handleAddFooter}/>
           <br/>
           <br/>
           <input type="button" value="Col +" onClick={this.handleAddCol}/>

           <table>
                <Thead items={head} />
                <Tbody items={body} />
                <Tbody items={footer} />
            </table>
           
        </div>)
    }
}

export default Table
