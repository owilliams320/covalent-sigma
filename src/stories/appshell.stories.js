import { withDesign } from 'storybook-addon-designs'
import '@material/mwc-drawer';
import '@material/mwc-top-app-bar';
import '@material/mwc-icon-button';
import '@material/mwc-list/mwc-list';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-icon';

import topAppBarComponent from "./demos/top-app-bar.component";
import * as tableRowSelectionContent from "./demos/table-row-selection.content.html";

import { Fixed } from './top-app-bar.stories';

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
const navigationRailTemplate = `<navigation-rail>
<div style="height:64px;display:flex; align-items:center; justify-content: center;">
<mwc-icon-button class="toggle-drawer" onClick="" icon="menu"></mwc-icon-button>
</div>
<mwc-list  activatable>
    <mwc-list-item class="home-item" graphic="avatar" >
        <span>Vantage</span>
        <mwc-icon class="teradata-icon" slot="graphic">teradata</mwc-icon>
        <mwc-icon class="home-icon" slot="graphic">home</mwc-icon>
    </mwc-list-item>
    <mwc-list-item activated graphic="avatar">
        <span>Editor</span>
        <mwc-icon class="teradata-icon" slot="graphic">product_editor</mwc-icon>
    </mwc-list-item>
    <div class="mdc-divider"></div>
    <mwc-list-item graphic="avatar">
        <span>Sites</span>
        <mwc-icon class="teradata-icon" slot="graphic">server</mwc-icon>
    </mwc-list-item>
    <mwc-list-item graphic="avatar">
        <span>Data Protections</span>
        <mwc-icon slot="graphic">settings_backup_restore</mwc-icon>
    </mwc-list-item>
    <mwc-list-item graphic="avatar">
        <span>Identity</span>
        <mwc-icon slot="graphic">contacts</mwc-icon>
    </mwc-list-item>
</mwc-list>
<div style="display:flex; flex:1;"></div>

       <mwc-list  activatable>
           <mwc-list-item class="beta-list-item" graphic="icon" twoline>
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
</navigation-rail>`;
const Template = ({ type, navClick }) => {
    let drawer = undefined;
    let navigationRail = undefined;

    document.addEventListener('MDCDrawer:opened', ()=>{
        if (drawer.open) {
            navigationRail.classList.add('drawer-open')
        }
    })
    document.addEventListener('MDCDrawer:closed', ()=>{
        if (!drawer.open) {
            navigationRail.classList.remove("drawer-open");
        } 
    })

    document.addEventListener('DOMContentLoaded', () => {
        //the event occurred
        drawer = document.getElementsByTagName('mwc-drawer')[0];
        navigationRail = document.getElementsByTagName('navigation-rail')[0];

        document.querySelectorAll('mwc-icon-button').forEach((elem)=>{
            elem.addEventListener('click', (event) => {
                drawer.open = !drawer.open;
                navClick(event);
            });
        })
    }, { once : true });

  return `
    <style>

    html, body, #root {
        height: 100%
    }
    

    mwc-drawer {
        --mdc-typography-subtitle1-font-weight: 700;
        --mdc-typography-font-weight: 700;
        --mdc-list-vertical-padding: 0;
    }
    mwc-list-item {
        border-radius: 0 28px 28px 0;
        margin-right:16px;
    }
    mwc-top-app-bar-fixed {
        display:none;
    }

    .home-item .teradata-icon {
        --mdc-list-item-graphic-size: 40px; 
        --mdc-icon-size: 40px;
        --mdc-theme-text-icon-on-background: #f3753f;
    }

    .home-icon {
        --mdc-theme-text-icon-on-background: #fff;
        --mdc-list-item-graphic-size: 35px;
        margin-left: -2px;
    }
    

    .home-item mwc-icon {
        position: relative;
        border-radius: 100px;
    }
    .home-item mwc-icon::after {
        content: "";
        display:block;
        top: 0px;
        left: 0px;
        position: absolute;
        width: 35px;
        height: 35px;
        border-radius: 100%;
        background-color: #fff;
        border:1px solid #f3753f;
        z-index:-1;
    }

    .home-item:hover mwc-icon:after {
        background-color: #f3753f;
        margin-left: -2px;
    }

    .home-item .home-icon, .home-item:hover .teradata-icon {
        display:none;
    }

    .home-item:hover .home-icon {
        display:block;
    }
    
     .dark .logo-light, .logo-dark { display:none; }
     .dark .logo-dark { display:block; }

     navigation-rail {
         display:flex;
         height: 100%;
         flex-direction: column;
         max-width: 71px;
         text-align:center;
     }
     navigation-rail.drawer-open {
         display:none;
     }
     navigation-rail mwc-list-item {
         border-radius: 0;
         margin-right: 0;
     }

     .beta-list-item {
        border-radius: 0;
        margin-right: 0;
        --mdc-list-item-meta-size: 20px;
        --mdc-list-item-graphic-size: 40px; 
        --mdc-list-item-graphic-margin: 15px;
        --mdc-typography-subtitle1-font-size: 200px;
     }

     .beta-list-item .beta-icon {
         height: 20px;
         line-height:20px;
         width: 40px;
     }
    //  @media only screen and (max-width: 1000px) {
    //     mwc-top-app-bar-fixed {
    //         display:block;
    //     }
    //     navigation-rail {
    //         display: none;
    //     }
    // }
    </style>
    <mwc-drawer type="${type}" >
     
     <div style="display:flex; flex-direction:column; height:100%;">
        <div style="height:64px;display:flex; align-items:center;padding-left: 11px;
        padding-right: var(--mdc-list-side-padding, 16px);">
        <mwc-icon-button class="toggle-drawer" onClick="" icon="menu"></mwc-icon-button>
        <svg class="logo-light" style="width:100px; margin-left:8px;" viewBox="0 0 696 133" fit=""  preserveAspectRatio="xMidYMid meet" focusable="false">
            <path class="logo-text" fill="#354145" d="M78.882 72.796h45.059c-3.178-11.966-12.153-17.201-22.063-17.201-9.348 0-20.005 5.609-22.996 17.201zm70.3 17.388H78.134c2.43 13.462 11.965 21.689 23.37 21.689 7.292 0 16.453-.936 23.185-12.34l22.062 4.673C138.524 123.652 121.884 133 101.504 133c-26.362 0-47.864-20.006-47.864-49.36s21.502-49.547 48.238-49.547c24.867 0 46.368 19.258 47.304 47.678v8.413zM387.843 83.64c0-17.201-13.275-28.045-26.549-28.045-14.958 0-26.176 10.844-26.176 28.045s11.218 27.858 26.176 27.858c13.274 0 26.549-10.657 26.549-27.858zm24.68 46.555h-24.68v-8.039c-7.479 6.918-17.762 10.844-30.85 10.844-23.745 0-45.807-20.006-45.807-49.36s22.062-49.547 45.807-49.547c13.088 0 23.371 3.926 30.85 10.844v-44h24.68v129.258zM630.3 92.427c0 11.966-11.406 20.941-24.493 20.941-9.536 0-15.892-4.488-15.892-11.406 0-6.356 5.234-10.656 13.088-10.656H630.3v1.121zm-15.893-55.31v-.024h-34.108v20.565h34.108c9.536 0 15.893 4.107 15.893 13.455v1.497h-26.923c-23.559 0-37.021 11.966-37.021 29.914 0 18.322 14.21 30.476 35.525 30.476 12.714 0 22.062-4.3 28.419-10.47v7.665h23.558V69.244c0-22.162-15.615-31.627-39.451-32.127zM484.378 92.427c0 11.966-11.405 20.941-24.493 20.941-9.536 0-15.893-4.488-15.893-11.406 0-6.356 5.235-10.656 13.088-10.656h27.298v1.121zm-15.893-55.31v-.024h-34.108v20.565h34.108c9.535 0 15.893 4.107 15.893 13.455v1.497h-26.924c-23.559 0-37.02 11.966-37.02 29.914 0 18.322 14.21 30.476 35.524 30.476 12.714 0 22.062-4.3 28.42-10.47v7.665h23.557V69.244c0-22.162-15.614-31.627-39.45-32.127zM279.3 92.427c0 11.966-11.406 20.941-24.493 20.941-9.536 0-15.893-4.488-15.893-11.406 0-6.356 5.236-10.656 13.089-10.656H279.3v1.121zm-15.892-55.31v-.024h-34.109v20.565h34.109c9.535 0 15.892 4.107 15.892 13.455v1.497h-26.924c-23.558 0-37.02 11.966-37.02 29.914 0 18.322 14.21 30.476 35.525 30.476 12.714 0 22.062-4.3 28.419-10.47v7.665h23.558V69.244c0-22.162-15.614-31.627-39.45-32.127zM216.11 37.026c-15.144 0-25.989 6.043-33.467 16.887V36.899h-24.68v93.298h24.68v-30.102c0-25.989 10.47-42.319 33.28-42.319h1.121V37.029a141.28 141.28 0 00-.934-.003"></path>
            <path class="logo-text" fill="#354145" d="M48.982 107.707c-3.753 1.408-7.691 2.295-10.654 2.295-8.226 0-13.648-4.86-13.648-16.079V57.09h25.302V36.898H24.68V14.007H0v81.786C0 121.408 14.584 133 36.646 133c7.792 0 15.233-1.662 24.835-6.801-5.117-5.076-9.814-11.399-12.499-18.492M558.509 109.788c-.988.138-1.923.214-2.776.214-8.226 0-13.648-4.86-13.648-16.079V57.09h25.983V36.898h-25.983V14.007h-24.681v81.786c0 25.615 14.584 37.207 36.647 37.207 5.389 0 10.251-.794 15.913-2.983-7.319-5.243-10.165-13.736-11.455-20.229"></path>
            <path class="logo-dot" fill="#e46c42" d="M695.029 116.028c0 8.825-6.772 15.596-16.212 15.596s-16.212-6.771-16.212-15.596c0-8.413 6.772-15.801 16.212-15.801s16.212 7.388 16.212 15.801"></path>
        </svg> 
        <svg class="logo-dark" style="width:100px; margin-left:8px;" viewBox="0 0 696 133" fit=""  preserveAspectRatio="xMidYMid meet" focusable="false">
            <path class="logo-text" fill="#FFFFFF" d="M78.882 72.796h45.059c-3.178-11.966-12.153-17.201-22.063-17.201-9.348 0-20.005 5.609-22.996 17.201zm70.3 17.388H78.134c2.43 13.462 11.965 21.689 23.37 21.689 7.292 0 16.453-.936 23.185-12.34l22.062 4.673C138.524 123.652 121.884 133 101.504 133c-26.362 0-47.864-20.006-47.864-49.36s21.502-49.547 48.238-49.547c24.867 0 46.368 19.258 47.304 47.678v8.413zM387.843 83.64c0-17.201-13.275-28.045-26.549-28.045-14.958 0-26.176 10.844-26.176 28.045s11.218 27.858 26.176 27.858c13.274 0 26.549-10.657 26.549-27.858zm24.68 46.555h-24.68v-8.039c-7.479 6.918-17.762 10.844-30.85 10.844-23.745 0-45.807-20.006-45.807-49.36s22.062-49.547 45.807-49.547c13.088 0 23.371 3.926 30.85 10.844v-44h24.68v129.258zM630.3 92.427c0 11.966-11.406 20.941-24.493 20.941-9.536 0-15.892-4.488-15.892-11.406 0-6.356 5.234-10.656 13.088-10.656H630.3v1.121zm-15.893-55.31v-.024h-34.108v20.565h34.108c9.536 0 15.893 4.107 15.893 13.455v1.497h-26.923c-23.559 0-37.021 11.966-37.021 29.914 0 18.322 14.21 30.476 35.525 30.476 12.714 0 22.062-4.3 28.419-10.47v7.665h23.558V69.244c0-22.162-15.615-31.627-39.451-32.127zM484.378 92.427c0 11.966-11.405 20.941-24.493 20.941-9.536 0-15.893-4.488-15.893-11.406 0-6.356 5.235-10.656 13.088-10.656h27.298v1.121zm-15.893-55.31v-.024h-34.108v20.565h34.108c9.535 0 15.893 4.107 15.893 13.455v1.497h-26.924c-23.559 0-37.02 11.966-37.02 29.914 0 18.322 14.21 30.476 35.524 30.476 12.714 0 22.062-4.3 28.42-10.47v7.665h23.557V69.244c0-22.162-15.614-31.627-39.45-32.127zM279.3 92.427c0 11.966-11.406 20.941-24.493 20.941-9.536 0-15.893-4.488-15.893-11.406 0-6.356 5.236-10.656 13.089-10.656H279.3v1.121zm-15.892-55.31v-.024h-34.109v20.565h34.109c9.535 0 15.892 4.107 15.892 13.455v1.497h-26.924c-23.558 0-37.02 11.966-37.02 29.914 0 18.322 14.21 30.476 35.525 30.476 12.714 0 22.062-4.3 28.419-10.47v7.665h23.558V69.244c0-22.162-15.614-31.627-39.45-32.127zM216.11 37.026c-15.144 0-25.989 6.043-33.467 16.887V36.899h-24.68v93.298h24.68v-30.102c0-25.989 10.47-42.319 33.28-42.319h1.121V37.029a141.28 141.28 0 00-.934-.003"></path>
            <path class="logo-text" fill="#FFFFFF" d="M48.982 107.707c-3.753 1.408-7.691 2.295-10.654 2.295-8.226 0-13.648-4.86-13.648-16.079V57.09h25.302V36.898H24.68V14.007H0v81.786C0 121.408 14.584 133 36.646 133c7.792 0 15.233-1.662 24.835-6.801-5.117-5.076-9.814-11.399-12.499-18.492M558.509 109.788c-.988.138-1.923.214-2.776.214-8.226 0-13.648-4.86-13.648-16.079V57.09h25.983V36.898h-25.983V14.007h-24.681v81.786c0 25.615 14.584 37.207 36.647 37.207 5.389 0 10.251-.794 15.913-2.983-7.319-5.243-10.165-13.736-11.455-20.229"></path>
            <path class="logo-dot" fill="#e46c42" d="M695.029 116.028c0 8.825-6.772 15.596-16.212 15.596s-16.212-6.771-16.212-15.596c0-8.413 6.772-15.801 16.212-15.801s16.212 7.388 16.212 15.801"></path>
        </svg>
        </div>
     
      <mwc-list  activatable>
           <mwc-list-item graphic="avatar" >
               <span>Vantage</span>
               <mwc-icon class="teradata-icon" slot="graphic">teradata</mwc-icon>
           </mwc-list-item>
           <mwc-list-item activated graphic="avatar">
               <span>Editor</span>
               <mwc-icon class="teradata-icon" slot="graphic">product_editor</mwc-icon>
           </mwc-list-item>
           <h3 class="mdc-typography--subtitle1" style="padding-left: var(--mdc-list-side-padding, 16px);
           padding-right: var(--mdc-list-side-padding, 16px);">Operations</h3>
           <mwc-list-item graphic="avatar">
               <span>Sites</span>
               <mwc-icon class="teradata-icon" slot="graphic">server</mwc-icon>
           </mwc-list-item>
           <mwc-list-item graphic="avatar">
               <span>Data Protections</span>
               <mwc-icon slot="graphic">settings_backup_restore</mwc-icon>
           </mwc-list-item>
           <mwc-list-item graphic="avatar">
               <span>Identity</span>
               <mwc-icon slot="graphic">contacts</mwc-icon>
           </mwc-list-item>
       </mwc-list>
       <div style="display:flex; flex:1;"></div>
       <div divider></div>
       <mwc-list  activatable>

           <mwc-list-item class="beta-list-item" graphic="icon" twoline>
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
     </div>
      
        <div slot="appContent" style="display: flex; flex-direction: row; height: 100%;">
            ${navigationRailTemplate}
            <div style="height:100%; overflow:auto">
            <mwc-top-app-bar-fixed>
                <mwc-icon-button slot="navigationIcon" icon="menu"></mwc-icon-button>
            </mwc-top-app-bar-fixed>
            <div>
              ${tableRowSelectionContent}    
            </div>
            </div>
        </div>
    </mwc-drawer>`;
};

export const Dismissible = Template.bind({});
Dismissible.args = {
    type: 'dismissible'
}

export const Modal = Template.bind({});
Modal.args = {
    type: 'modal'
}