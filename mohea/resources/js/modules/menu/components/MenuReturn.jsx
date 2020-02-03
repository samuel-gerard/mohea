import React, { Component } from "react";
import { connect } from "react-redux";
import { PrismCode } from "../../../components/PrismCode";
import "../../../../sass/input.scss";
import ClipboardJS from 'clipboard';


const MenuReturn = props => {

    const { menu } = props;
    const menuClasses = props.classes.join(' ');

    // Init clipboard button
    new ClipboardJS('#button-to-copy');
    let html = '';

    const camelToKebab = string => {
        return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
    }

    // Start
    html += `<table class="${menuClasses}">
`

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

export default connect(mapStateToProps)(MenuReturn);
