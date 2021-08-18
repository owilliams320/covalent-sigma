import "@material/mwc-top-app-bar";
import "@material/mwc-top-app-bar-fixed";
import '@material/mwc-button';
import "@material/mwc-icon-button";

// Example Content
import * as loremIpsumContent from "./lorem-ipsum.content.html";
import * as tableContent from "./table.content.html";

const iconButtons = `
        <mwc-icon-button icon="filter_list" slot="actionItems"></mwc-icon-button>
        <mwc-icon-button icon="search" slot="actionItems"></mwc-icon-button>
        <mwc-icon-button icon="add" slot="actionItems"></mwc-icon-button>`;

const buttons = `<mwc-button style=" --mdc-theme-primary: white; color: white;" label="Buttons" slot="actionItems" ></mwc-button>
<mwc-button style=" --mdc-theme-primary: white; --mdc-button-outline-color: white;
color: white;"  outlined label="Buttons" slot="actionItems" ></mwc-button>`;
      
export default ({ title = "App Bar Title", centerTitle, dense, prominent, showContent, showActionItems } = {}, { parameters } = {}) => {
    const AppBarComponentElem = parameters?.fixed ? 'mwc-top-app-bar-fixed' : 'mwc-top-app-bar';
    const content = showContent || parameters?.fixed ? loremIpsumContent : tableContent;
    const actionItems = showActionItems === 'buttons' ? buttons : iconButtons;

    return `
      <${AppBarComponentElem}
          ${centerTitle ? "centerTitle" : null}
          ${dense ? "dense" : null}
          ${prominent ? "prominent" : null}>
        <mwc-icon-button slot="navigationIcon" icon="menu_open"></mwc-icon-button>
        <div slot="title">${title}</div>
        ${actionItems}
        <div>
          ${content}
        </div>
       </${AppBarComponentElem}>`;
};