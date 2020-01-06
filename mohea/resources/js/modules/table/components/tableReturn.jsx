import React, { Component } from "react";
import { connect } from "react-redux";
import { PrismCode } from "../../../components/PrismCode";
import "../../../../sass/input.scss";
import ClipboardJS from 'clipboard';


const TableReturn = props => {

    const caption = props.caption;
    const { head, body, foot } = props.tableau;
    const tableClasses = props.classes.join(' ');

    // Init clipboard button
    new ClipboardJS('#button-to-copy');
    let html = '';

    const handleStart = () => {
        if (caption.length <= 0) {
            html += `<table class="${tableClasses}">
`
        } else {
            html += `<table summary="${caption}" class="${tableClasses}">
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
                html += `           <td headers="col-${idxBis} bodyRow-${idx}">${bodyEl}</td>
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
                html += `           <td headers="col-${idxBis} footRow-${idx}">${footEl}</td>
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
                    plugins={["line-numbers", "normalize-whitespace"]}
                />
                <button id="button-to-copy" data-clipboard-text={html}>
                    Copy to clipboard
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(TableReturn);
