import React, { Component } from "react";
import { connect } from "react-redux";
import { PrismCode } from "../../../components/PrismCode";
import "../../../../sass/input.scss";
import ClipboardJS from 'clipboard';
import BootstrapReturn from "../../../components/BootstrapReturn";

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

    const camelToKebab = string => {
        return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
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
                if(headEl.style) {
                    let style = '';
                    Object.keys(headEl.style).map(key => {
                        if(!headEl.style[key]) return

                        style += camelToKebab(key) + ':' + headEl.style[key] + ';'
                    })
                    html += `           <th id="col-${idxBis}" style="${style}"${headEl.colspan ? ' colspan="' + headEl.colspan + '"' : ''}>${headEl.value}</th>
`
                } else {
                    html += `           <th id="col-${idxBis}"${headEl.colspan ? ' colspan="' + headEl.colspan + '"' : ''}>${headEl.value}</th>
`
                }
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
                if(bodyEl.style) {
                    let style = '';
                    Object.keys(bodyEl.style).map(key => {
                        if(!bodyEl.style[key]) return
                        
                        style += camelToKebab(key) + ':' + bodyEl.style[key] + ';'
                    })
                    html += `           <td headers="col-${idxBis} bodyRow-${idx}" style="${style}">${bodyEl.value}</td>
`
                } else {
                    html += `           <td headers="col-${idxBis} bodyRow-${idx}">${bodyEl.value}</td>
`
                }
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
                if(footEl.style) {
                    let style = '';
                    Object.keys(footEl.style).map(key => {
                        if(!footEl.style[key]) return
                        
                        style += camelToKebab(key) + ':' + footEl.style[key] + ';'
                    })
                    html += `           <td headers="col-${idxBis} footRow-${idx}" style="${style}">${footEl.value}</td>
`
                } else {
                    html += `           <td headers="col-${idxBis} footRow-${idx}">${footEl.value}</td>
`
                }
                
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
        <div className="ta-center">
            <h1 className="h1 bold">Your HTML code</h1>
            <BootstrapReturn />
            <button id="button-to-copy" className="button primary" data-clipboard-text={html}>
                Copy to clipboard
            </button>
            <div className="w-50 mx-auto">
                <PrismCode
                    code={html}
                    language="html"
                    plugins={["line-numbers", "normalize-whitespace"]}
                />
            </div>
        </div>
    )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(TableReturn);
