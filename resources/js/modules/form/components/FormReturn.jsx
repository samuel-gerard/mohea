import React, { Component } from "react";
import { connect } from "react-redux";
import { PrismCode } from "../../../components/PrismCode";
import ClipboardJS from 'clipboard';
import BootstrapReturn from "../../../components/BootstrapReturn";

const FormReturn = props => {

    new ClipboardJS('#button-to-copy');

    const { elementsUsed } = props

    let html = '<form>\n'

    elementsUsed.forEach(element => {
        switch (element.name) {
            case 'Text':
                html += '  <div class="form-group">\n'
                    + '      <p>' + element.content + '</p>\n'
                    + '  </div>\n'
                break;

            case 'Title':

                switch (element.tag) {
                    case 'h1':
                        html += '  <div class="form-group">\n'
                            + '      <h1>' + element.content + '</h1>\n'
                            + '  </div>\n'
                        break;
                    case 'h2':
                        html += '  <div class="form-group">\n'
                            + '      <h2>' + element.content + '</h2>\n'
                            + '  </div>\n'
                        break;
                    case 'h3':
                        html += '  <div class="form-group">\n'
                            + '      <h3>' + element.content + '</h3>\n'
                            + '  </div>\n'
                        break;
                    case 'h4':
                        html += '  <div class="form-group">\n'
                            + '      <h4>' + element.content + '</h4>\n'
                            + '  </div>\n'
                        break;
                }
                break;

            case 'Submit':
                html += '  <div class="form-group">\n'
                    + '      <label>' + element.value + '</label>\n'
                    + '      <input type="submit" class="form-control" aria-describedby="submitButton" value="' + element.value + '" >\n'
                    + '  </div>\n'
                break;

            case 'Text Input':
            case 'Date':
            case 'Email':
            case 'Link':
            case 'Phone':
            case 'Password':
                html += '  <div class="form-group">\n'
                    + '      <label>' + element.label + '</label>\n'
                    + '      <input type="' + element.type + '" class="form-control" ' + element.required + ' aria-describedby="input' + element.type + '" placeholder="' + element.placeholder + '" >\n'
                    + '  </div>\n'
                break;

            case 'Text Area':
                var textAreaId = "textAreaInput" + element.id
                html += '  <div class="form-group">\n'
                    + '      <label for="' + textAreaId + '">' + element.label + '</label>\n'
                    + '      <textarea rows="' + element.rows + '" id="' + textAreaId + '" ' + element.required + ' aria-describedby="textAreaInput" class="form-control" col="' + element.col + '" placeholder="' + element.placeholder + '" >\n'
                    + '  </div>\n'
                break;

            case 'Select':
                var selectId = "salectInput" + element.id
                html += '  <div class="form-group" aria-describedby="selectInput">\n'
                    + '      <label for="' + selectId + '">' + element.label + '</label>\n'
                    + '      <select class="form-control" ' + element.required + ' id="' + selectId + '">\n'
                element.options.forEach(option => {
                    html += '            <option value="' + option.value + '">' + option.content + '</option>\n'
                })
                html += '        </select>\n'
                    + '  </div>\n'
                break;

            case 'Check Box':
            case 'Radio Button':
                html += '  <div class="form-group" >\n'
                    + '      <label class="col-form-label">' + element.label + '</label>\n'
                element.options.forEach((option, i) => {
                    var name = "radio_" + element.id
                    var id = "check_radio" + element.id + "_id_" + option.id
                    var value = "val_" + option.id
                    html += '       <div class="form-check">\n'
                        + '          <input class="form-check-input" ' + element.required + ' name="' + name + '" type="' + option.type + '" value="' + value + '" id="' + id + '" >\n'
                        + '          <label class="form-check-label" for="' + id + '">' + option.label + '</label>\n'
                        + '      </div>\n'
                })
                html += '   </div>\n'
                break;

        }
    });

    html += '</form>\n'

    return (
        <div className="ta-center">
            <h2 className="h1 bold">Your HTML code</h2>
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

export default connect(mapStateToProps)(FormReturn);
