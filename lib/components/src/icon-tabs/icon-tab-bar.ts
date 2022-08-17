import { html } from 'lit';
import { TabBarBase } from '@material/mwc-tab-bar/mwc-tab-bar-base';
import {styles as tabBarStyles} from '@material/mwc-tab-bar/mwc-tab-bar.css';
import { customElement } from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
   'td-icon-tab-bar': CovalentIconTabBarBase;
  }
}

@customElement('td-icon-tab-bar')
export class CovalentIconTabBarBase extends TabBarBase {
  static override styles = [tabBarStyles];

}