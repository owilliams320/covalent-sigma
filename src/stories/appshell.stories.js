import { withDesign } from 'storybook-addon-designs'
// import topAppBarComponent from "./demos/top-app-bar.component";
import * as tableRowSelectionContent from "./demos/table-row-selection.content.html";

// import { Fixed } from './top-app-bar.stories';
import '@material/mwc-button';
import '@material/mwc-drawer';
import '@material/mwc-top-app-bar';
import "@material/mwc-top-app-bar-fixed";
import '@material/mwc-icon-button';
import '@material/mwc-list/mwc-list';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-icon';

import { MDCDataTable, events } from '@material/data-table';

export default {
  title: 'Pattern/AppShell',
  argTypes: {
    navClick: { action: 'clicked' }
  },
  decorators: [withDesign],
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/aDX2Rc1OIJ9tWgMcAvKRXv/Section?node-id=22%3A1453',
    },
  }
};

let banner;
let dataTable;

const updateActionRibbon = () => {
    const selectedRowNum = dataTable.getSelectedRowIds().length;
    const totalRows = dataTable.rowCheckboxList.length;
  
    if (selectedRowNum) {
        banner.labelText = `(${selectedRowNum}/${totalRows}) items selected`;
        banner.show();
    } else  {
        banner.close();
    }
}

const Template = ({ navClick }) => {
    
    document.addEventListener('DOMContentLoaded', () => {
        const dataTableEl = document.querySelector('.mdc-data-table');
        banner = document.querySelector('td-action-ribbon');
        dataTable = new MDCDataTable(dataTableEl);

        setTimeout(updateActionRibbon, 150);
    }, { once : true });

    document.addEventListener(events.SELECTED_ALL, updateActionRibbon);
    document.addEventListener(events.UNSELECTED_ALL, updateActionRibbon);
    document.addEventListener(events.ROW_SELECTION_CHANGED, updateActionRibbon);
    
  return `
    <style>

    html, body, #root {
        height: 100%;
        background: var(--mdc-theme-background);
    }

    [divider] {
        border-bottom: 1px solid;
        border-color: var(--mdc-theme-border, rgba(black, 0.12));
    }

    .mdc-data-table {
        width: 100%;
        border-width: 0;
        white-space: normal;
    }

    .covalent-icon {
        --mdc-icon-font: "covalent-icons";
    }

    .beta-list-item {
        --mdc-list-item-meta-size: 20px;
        --mdc-list-item-graphic-size: 40px; 
        --mdc-list-item-graphic-margin: 15px;
        --mdc-typography-subtitle1-font-size: var(--mdc-typography-subtitle2-font-size);
        --mdc-typography-body2-font-size: var(--mdc-typography-caption-font-size);
        border-radius: 0;
        margin-right: 0;
        margin-left: 0;
        padding: 0 16px;
        max-width: inherit;
        height: 72px;
        font-size: var(--mdc-typography-subtitle1-font-size);
    }

    .beta-list-item .beta-icon {
        height: 20px;
        line-height:20px;
        width: 40px;
    }

    .td-toolbar {
        min-height:64px;
        display: flex;
        align-items: center;
        padding: 0 16px;
        border-top: 1px solid;
        border-color: var(--mdc-theme-border, rgba(black, 0.12))
    }

    .spacer {
        display: flex;
        flex: 1;
    }

    html.dark .logo-light, .logo-dark { display:none; }
    html.dark .logo-dark { display:block; }


    .hidden-large {
        display: none;
    }

    @media only screen and (max-width: 800px) {
        .hidden-large {
            display:block;
        }
        .hidden-small {
            display: none;
        }
    }
    </style>
    <td-app-shell appName="[App Name]" >

    <mwc-list slot="user-menu" activatable>
            <mwc-list-item class="beta-list-item" graphic="icon" twoline activated>
                <span class="beta-icon" slot="graphic"><svg  style="fill:orange; height:20px;" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
                <g>
                    <path d="M0 2C0 0.895431 0.895431 0 2 0H40L34.9206 20H2C0.895429 20 0 19.1046 0 18V2Z"></path>
                    <path d="M5.73242 14V6.8418H8.41797C8.96484 6.8418 9.40267 6.91504 9.73145 7.06152C10.0635 7.20475 10.3223 7.42773 10.5078 7.73047C10.6966 8.02995 10.791 8.34408 10.791 8.67285C10.791 8.97884 10.708 9.26693 10.542 9.53711C10.376 9.80729 10.1253 10.0254 9.79004 10.1914C10.223 10.3184 10.555 10.5348 10.7861 10.8408C11.0205 11.1468 11.1377 11.5081 11.1377 11.9248C11.1377 12.2601 11.0661 12.5726 10.9229 12.8623C10.7829 13.1488 10.6087 13.3701 10.4004 13.5264C10.1921 13.6826 9.93001 13.8014 9.61426 13.8828C9.30176 13.9609 8.91764 14 8.46191 14H5.73242ZM6.67969 9.84961H8.22754C8.64746 9.84961 8.94857 9.82194 9.13086 9.7666C9.37174 9.69499 9.55241 9.57617 9.67285 9.41016C9.79655 9.24414 9.8584 9.03581 9.8584 8.78516C9.8584 8.54753 9.80143 8.33919 9.6875 8.16016C9.57357 7.97786 9.41081 7.85417 9.19922 7.78906C8.98763 7.7207 8.62467 7.68652 8.11035 7.68652H6.67969V9.84961ZM6.67969 13.1553H8.46191C8.7679 13.1553 8.98275 13.1439 9.10645 13.1211C9.32454 13.082 9.50684 13.0169 9.65332 12.9258C9.7998 12.8346 9.92025 12.7028 10.0146 12.5303C10.109 12.3545 10.1562 12.1527 10.1562 11.9248C10.1562 11.6579 10.0879 11.4268 9.95117 11.2314C9.81445 11.0329 9.62402 10.8945 9.37988 10.8164C9.139 10.735 8.79069 10.6943 8.33496 10.6943H6.67969V13.1553ZM12.7109 14V6.8418H17.8867V7.68652H13.6582V9.87891H17.6182V10.7188H13.6582V13.1553H18.0527V14H12.7109ZM21.4326 14V7.68652H19.0742V6.8418H24.748V7.68652H22.3799V14H21.4326ZM24.4463 14L27.1953 6.8418H28.2158L31.1455 14H30.0664L29.2314 11.832H26.2383L25.4521 14H24.4463ZM26.5117 11.0605H28.9385L28.1914 9.07812C27.9635 8.47591 27.7943 7.98112 27.6836 7.59375C27.5924 8.05273 27.4639 8.50846 27.2979 8.96094L26.5117 11.0605Z" fill="black" fill-opacity="0.87"></path>
                </g>
                </svg></span>
               <span>You're trying console beta</span>
               <span slot="secondary">Return to classic</span>
           </mwc-list-item>
           <mwc-list-item graphic="avatar">
               <span>Notification</span>
               <mwc-icon slot="graphic">notifications</mwc-icon>
           </mwc-list-item>
           <mwc-list-item graphic="avatar">
               <span>Help</span>
               <mwc-icon slot="graphic">help</mwc-icon>
           </mwc-list-item>
           <mwc-list-item graphic="avatar">
               <span>Account</span>
               <mwc-icon slot="graphic">person</mwc-icon>
           </mwc-list-item>
    </mwc-list>


    <mwc-list slot="user-menu-rail" activatable>
            <mwc-list-item class="beta-list-item" graphic="icon" twoline activated>
                <span class="beta-icon" slot="graphic"><svg  style="fill:orange; height:20px;" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
                <g>
                    <path d="M0 2C0 0.895431 0.895431 0 2 0H40L34.9206 20H2C0.895429 20 0 19.1046 0 18V2Z"></path>
                    <path d="M5.73242 14V6.8418H8.41797C8.96484 6.8418 9.40267 6.91504 9.73145 7.06152C10.0635 7.20475 10.3223 7.42773 10.5078 7.73047C10.6966 8.02995 10.791 8.34408 10.791 8.67285C10.791 8.97884 10.708 9.26693 10.542 9.53711C10.376 9.80729 10.1253 10.0254 9.79004 10.1914C10.223 10.3184 10.555 10.5348 10.7861 10.8408C11.0205 11.1468 11.1377 11.5081 11.1377 11.9248C11.1377 12.2601 11.0661 12.5726 10.9229 12.8623C10.7829 13.1488 10.6087 13.3701 10.4004 13.5264C10.1921 13.6826 9.93001 13.8014 9.61426 13.8828C9.30176 13.9609 8.91764 14 8.46191 14H5.73242ZM6.67969 9.84961H8.22754C8.64746 9.84961 8.94857 9.82194 9.13086 9.7666C9.37174 9.69499 9.55241 9.57617 9.67285 9.41016C9.79655 9.24414 9.8584 9.03581 9.8584 8.78516C9.8584 8.54753 9.80143 8.33919 9.6875 8.16016C9.57357 7.97786 9.41081 7.85417 9.19922 7.78906C8.98763 7.7207 8.62467 7.68652 8.11035 7.68652H6.67969V9.84961ZM6.67969 13.1553H8.46191C8.7679 13.1553 8.98275 13.1439 9.10645 13.1211C9.32454 13.082 9.50684 13.0169 9.65332 12.9258C9.7998 12.8346 9.92025 12.7028 10.0146 12.5303C10.109 12.3545 10.1562 12.1527 10.1562 11.9248C10.1562 11.6579 10.0879 11.4268 9.95117 11.2314C9.81445 11.0329 9.62402 10.8945 9.37988 10.8164C9.139 10.735 8.79069 10.6943 8.33496 10.6943H6.67969V13.1553ZM12.7109 14V6.8418H17.8867V7.68652H13.6582V9.87891H17.6182V10.7188H13.6582V13.1553H18.0527V14H12.7109ZM21.4326 14V7.68652H19.0742V6.8418H24.748V7.68652H22.3799V14H21.4326ZM24.4463 14L27.1953 6.8418H28.2158L31.1455 14H30.0664L29.2314 11.832H26.2383L25.4521 14H24.4463ZM26.5117 11.0605H28.9385L28.1914 9.07812C27.9635 8.47591 27.7943 7.98112 27.6836 7.59375C27.5924 8.05273 27.4639 8.50846 27.2979 8.96094L26.5117 11.0605Z" fill="black" fill-opacity="0.87"></path>
                </g>
                </svg></span>
               <span>You're trying console beta</span>
               <span slot="secondary">Return to classic</span>
           </mwc-list-item>
           <mwc-list-item graphic="avatar">
               <span>Notification</span>
               <mwc-icon slot="graphic">notifications</mwc-icon>
           </mwc-list-item>
           <mwc-list-item graphic="avatar">
               <span>Help</span>
               <mwc-icon slot="graphic">help</mwc-icon>
           </mwc-list-item>
           <mwc-list-item graphic="avatar">
               <span>Account</span>
               <mwc-icon slot="graphic">person</mwc-icon>
           </mwc-list-item>
    </mwc-list>

    <div slot="mini-menu">
    <div class="td-toolbar">
        <span class="mdc-typography--headline6">[Page name]</span>
        <div class="spacer"></div>
        <mwc-icon-button slot="actionItems" icon="filter_list"></mwc-icon-button>
        <mwc-icon-button slot="actionItems" icon="add"></mwc-icon-button>
    </div>
    <div divider></div>
    <mwc-list slot="user-menu-rail" activatable>
           <mwc-list-item graphic="avatar" twoline >
               <mwc-icon class="covalent-icon" slot="graphic">server</mwc-icon>
               <span>[Object name]</span>
               <span slot="secondary">Secondary info</span>
           </mwc-list-item>
           <li divider role="separator"></li>
           <mwc-list-item graphic="avatar" twoline>
               <mwc-icon class="covalent-icon" slot="graphic">server</mwc-icon>
               <span>[Object name]</span>
               <span slot="secondary">Secondary info</span>
           </mwc-list-item>
           <li divider role="separator"></li>
           <mwc-list-item graphic="avatar" twoline activated>
               <mwc-icon class="covalent-icon" slot="graphic">server</mwc-icon>
               <span>[Object name]</span>
               <span slot="secondary">Secondary info</span>
           </mwc-list-item>
           <li divider role="separator"></li>
           <mwc-list-item graphic="avatar" twoline>
               <mwc-icon class="covalent-icon" slot="graphic">server</mwc-icon>
               <span>[Object name]</span>
               <span slot="secondary">Secondary info</span>
           </mwc-list-item>
           <li divider role="separator"></li>
    </mwc-list>
    </div>

    <div class="td-toolbar">
        <span class="mdc-typography--headline6">[Section name]</span>
        <div class="spacer"></div>
        <mwc-icon-button slot="actionItems" icon="menu_open"></mwc-icon-button>
        <mwc-icon-button class="hidden-large" slot="actionItems" icon="add"></mwc-icon-button>
        <mwc-button class="hidden-small" class="create-new-button" label="Create New" slot="actionItems" raised></mwc-button>
    </div>

    <mwc-tab-bar >
        <mwc-tab label="Overview" ></mwc-tab>
        <mwc-tab label="Usage" ></mwc-tab>
        <mwc-tab label="Objects" ></mwc-tab>
        <mwc-tab label="Queries" ></mwc-tab>
        <mwc-tab label="Network" ></mwc-tab>
        <mwc-tab label="Settings" ></mwc-tab>
    </mwc-tab-bar>

    <div divider role="separator"></div>

    <td-action-ribbon labelText="this is my label" state="active" >
      <mwc-button slot="action-items" class="mdc-banner__secondary-action" outlined>Bulk action</mwc-button>
    </td-action-ribbon>
    
    ${tableRowSelectionContent}  

    </td-app-shell>
    `;
};

export const Basic = Template.bind({});
