import React from "react";
import { PrismCode } from "./PrismCode";
import ClipboardJS from 'clipboard';

const BootstrapReturn = props => {

    new ClipboardJS('#button-to-copy'); 

    let html = '<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">\n'  

    html += '<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>\n'

    html += '<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js" integrity="sha384-6khuMg9gaYr5AxOqhkVIODVIvm9ynTT5J4V1cfthmT+emCG6yVmEZsRHdxlotUnm" crossorigin="anonymous"></script>\n'

    return (
        <div className="mb-20">
            <div className="w-50 mx-auto">
                <button id="button-to-copy" className="button secondary ml-auto mr-auto" data-clipboard-text={html}>
                    Copy Bootstrap sources
                </button>
                <PrismCode
                    code={html}
                    language="html"
                    plugins={["line-numbers", "normalize-whitespace"]}
                />
            </div>
        </div>
    )

}

export default BootstrapReturn;
