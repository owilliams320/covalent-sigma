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
    <mwc-list-item graphic="avatar">
        <span>Vantage</span>
        <mwc-icon slot="graphic">home</mwc-icon>
    </mwc-list-item>
    <mwc-list-item activated graphic="avatar">
        <span>Editor</span>
        <mwc-icon slot="graphic">code</mwc-icon>
    </mwc-list-item>
    <div class="mdc-divider"></div>
    <mwc-list-item graphic="avatar">
        <span>Sites</span>
        <mwc-icon slot="graphic">dns</mwc-icon>
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

           <mwc-list-item graphic="avatar" twoline>
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

    document.addEventListener('DOMContentLoaded', () => {
        //the event occurred
        drawer = document.getElementsByTagName('mwc-drawer')[0];
        navigationRail = document.getElementsByTagName('navigation-rail')[0];
        
        document.querySelectorAll('mwc-icon-button').forEach((elem)=>{
            elem.addEventListener('click', (event) => {
                drawer.open = !drawer.open;

                if (drawer.open) {
                    navigationRail.classList.add('drawer-open')
                } else {
                    navigationRail.classList.remove('drawer-open')
                }
                navClick(event);
            });
        })
    }, { once : true });

  return `
    <style>

    html, body, #root {
        height: 100%
    }
     mwc-list-item {
         border-radius: 0 28px 28px 0;
     }
     mwc-top-app-bar-fixed {
         display:none;
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
        <div style="height:64px;display:flex; align-items:center;padding-left: var(--mdc-list-side-padding, 16px);
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
           <mwc-list-item graphic="avatar">
               <span>Vantage</span>
               <mwc-icon slot="graphic">home</mwc-icon>
           </mwc-list-item>
           <mwc-list-item activated graphic="avatar">
               <span>Editor</span>
               <mwc-icon slot="graphic">code</mwc-icon>
           </mwc-list-item>
           <h3 class="mdc-typography--subtitle1" style="padding-left: var(--mdc-list-side-padding, 16px);
           padding-right: var(--mdc-list-side-padding, 16px);">Operations</h3>
           <mwc-list-item graphic="avatar">
               <span>Sites</span>
               <mwc-icon slot="graphic">dns</mwc-icon>
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

           <mwc-list-item graphic="avatar" twoline>
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