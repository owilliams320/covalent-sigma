// import "@material/mwc-top-app-bar";
// import "@material/mwc-top-app-bar-fixed";
// import '@material/mwc-button';
// import "@material/mwc-icon-button";

// Example Content
import * as loremIpsumContent from "./lorem-ipsum.content.html";
import * as tableContent from "./table.content.html";
import * as tableRowSelectionContent from "./table-row-selection.content.html";

const iconButtons = `
        <mwc-icon-button icon="filter_list" slot="actionItems"></mwc-icon-button>
        <mwc-icon-button icon="search" slot="actionItems"></mwc-icon-button>
        <mwc-icon-button icon="add" slot="actionItems"></mwc-icon-button>`;

const buttons = `<mwc-button label="Buttons" slot="actionItems" ></mwc-button>
    <mwc-button outlined label="Buttons" slot="actionItems" ></mwc-button>`;
      
export default ({ title = "App Bar Title", centerTitle, dense, prominent, showContent, showActionItems } = {}, { parameters } = {}) => {
    const AppBarComponentElem = parameters?.fixed ? 'mwc-top-app-bar-fixed' : 'mwc-top-app-bar';
    const actionItems =  showActionItems === 'buttons' ? buttons : iconButtons;
    let content = loremIpsumContent;

    switch(showContent) {
        case 'table':
            content = `<div style="flex-grow: inherit;>${tableContent}</div>`;
            break;
        case 'tableWithSelection':
            content = `<div style="flex-grow: inherit;>${tableRowSelectionContent}</div>`;
            break;
        case 'loremIpsum':
        default:
            content = loremIpsumContent;        
    }

    return `
      <${AppBarComponentElem}
          ${centerTitle ? "centerTitle" : null}
          ${dense ? "dense" : null}
          ${prominent ? "prominent" : null}>
        <mwc-icon-button slot="navigationIcon" icon="menu_open"></mwc-icon-button>
        <div slot="title">${title}</div>
        ${actionItems}
       </${AppBarComponentElem}>
       ${content}
       `;
};