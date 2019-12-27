import React, { Component } from "react";
import { connect } from "react-redux";
import { PrismCode } from "../../../components/PrismCode";
const TableReturn = props => {

        const caption = props.caption;
        const head = props.tableau.head;
        const body = props.tableau.body;
        const foot = props.tableau.foot;
        let html = '';

        const handleStart = () => {
            if (caption.length <= 0) {
                html += `<table>
`
            } else {
                html += `<table summary="${caption}">
`
            }

        }

        const handleHeader = () => {
            if (head.length <= 0) {
                return '';
            }

            html += `   <thead>
`
            head.forEach(headRow => {
                html += `       <tr>
`
                headRow.map((headEl, idxBis) => {
                    html += `           <th id="col-${idxBis}">${headEl}</th>
`
                })
                html += `       </tr>
`
            })
            html += `   </thead>
`

            return html;
        }

        const handleBody = () => {
            if (body.length <= 0) {
                return '';
            }

            html += `   <tbody>
`
            body.forEach((bodyRow, idx) => {
                html += `       <tr id="bodyRow-${idx}">
`
                bodyRow.map((bodyEl, idxBis) => {
                    html += `           <td id="col-${idxBis} bodyRow-${idx}">${bodyEl}</td>
`
                })
                html += `       </tr>
`
            })
            html += `   </tbody>
`

            return html;
        }

        const handleFooter = () => {
            if (foot.length <= 0) {
                return '';
            }

            html += `   <tfoot>
`
            foot.forEach((footRow, idx) => {
                html += `       <tr id="footRow-${idx}">
`
                footRow.map((footEl, idxBis) => {
                    html += `           <td id="col-${idxBis} footRow-${idx}">${footEl}</td>
`
                })
                html += `       </tr>
`
            })
            html += `   </tfoot>
`

            return html;
        }

        handleStart()
        handleHeader()
        handleBody()
        handleFooter()

        html += `</table>`;

        return (
            <div>
                <h1>Your HTML code</h1>
                <div className="w-50 mx-auto">
                    <PrismCode
                        code={html}
                        language="html"
                        plugins={["line-numbers", "remove-initial-line-feed"]}
                    />
                </div>
            </div>
        )
                {/* <pre>
                    <code className="language-html">
                    {`<table summary="${this.props.caption}">`}
                    {`<thead>`}
                    {head.length > 0 &&
                    head.map((headRow, idx) => {
                        return (
                            <code key={'headRow' + idx} className="language-html">
                            {`<tr>`}
                                {headRow.map((headEl, idxBis) => (
                                    `<th id="col-${idxBis}">${headEl}</th>`
                                ))}
                            {`</tr>`}
                            </code>
                        )
                    })
                    }
                    {`</thead>`}
                    {`<tbody>`}
                    {body.length > 0 &&
                    body.map((bodyRow, idx) => {
                        return (
                        <code key={'bodyRow' + idx} className="language-html">
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
                        <code key={'footRow' + idx} className="language-html">
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
                    </code>
                </pre>
            </div>
        )*/}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(TableReturn);
