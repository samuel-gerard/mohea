import React, { Component } from "react";
import { connect } from "react-redux";

class TableReturn extends Component {
    render() {
        const end =`</table>`;
        const head = this.props.tableau.head;
        const body = this.props.tableau.body;
        const foot = this.props.tableau.foot;
        
        return (
            <div>
                <h1>Your HTML code</h1>
                
                <pre style={{backgroundColor: '#232323', color: 'white'}}>
                    {`<table summary="${this.props.caption}">`}
                    {`<thead>`}
                    {head.length > 0 &&
                    head.map((headRow, idx) => {
                        return(
                        <code key={'headRow' + idx}>
                            {`<tr>`}
                            {headRow.map((headEl, idxBis) => (
                                `<th id="col-${idxBis}">${headEl}</th>`
                            ))}
                            {`<tr>`}
                        </code>
                    )
                    })
                    }
                    {`</thead>`}
                    {`<tbody>`}
                    {body.length > 0 &&
                    body.map((bodyRow, idx) => {
                        return(
                        <code key={'bodyRow' + idx}>
                            {`<tr id="bodyRow-${idx}">`}
                            {bodyRow.map((bodyEl, idxBis) => (
                                `<th headers="col-${idxBis} bodyRow-${idx}">${bodyEl}</th>`
                            ))}
                            {`<tr>`}
                        </code>
                    )
                    })
                    }
                    {`</tbody>`}
                    {`<tfoot>`}
                    {foot.length > 0 &&
                    foot.map((footRow, idx) => {
                        return(
                        <code key={'footRow' + idx}>
                            {`<tr id="footRow-${idx}">`}
                            {footRow.map((footEl, idxBis) => (
                                `<th headers="col-${idxBis} footRow-${idx}">${footEl}</th>`
                            ))}
                            {`<tr>`}
                        </code>
                    )
                    })
                    }
                    {`</tfoot>`}
                    {end}
                </pre>
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(TableReturn);
