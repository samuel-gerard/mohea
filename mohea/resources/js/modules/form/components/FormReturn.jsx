import React, { Component } from "react";
import { connect } from "react-redux";
import { PrismCode } from "../../../components/PrismCode";
import ClipboardJS from 'clipboard';

const FormReturn = props => {

    new ClipboardJS('#button-to-copy');

    let html = '<h1>ICI => le code du formulaire !</h1>'

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

export default connect(mapStateToProps)(FormReturn);
