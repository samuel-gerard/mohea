import React, { Component } from "react";
import { connect } from "react-redux";
import { PrismCode } from "../../../components/PrismCode";
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

    if(menu.length < 1) {
        return '';
    }
    
    // Start
    html += `<nav class="${menuClasses}">
`
    html += `   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
`
    html += `     <span class="navbar-toggler-icon"></span>
`
    html += `   </button>
`
    html += `   <div class="collapse navbar-collapse" id="navbarSupportedContent">
`
    html += `       <ul class="navbar-nav mr-auto">
`
    {Object.values(menu).map( (item, idx) => {
        html += `           <li class="nav-item">
`
        if( Object.keys(item.style).length > 0 ) {
            let style = '';
            Object.keys(item.style).map(key => {
                if(!item.style[key]) return
    
                style += camelToKebab(key) + ':' + item.style[key] + ';'
            })

            html += `               <a href="${item.link}" title="${item.title}" style="${style}" ${item.target === '_blank' ? 'target="_blank"' : ''}>
`
        } else {
            html += `               <a href="${item.link}" title="${item.title} ${item.target === '_blank' ? 'target="_blank"' : ''}">
`           
        }
        html += `                   ${item.value}
`
        html += `               </a>
`
        html += `           </li>
`
    })}

    html += `       </ul>
`
    html += `   </div>
`
    html += `</nav>`;

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
