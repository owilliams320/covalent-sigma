import { customElement, property } from 'lit/decorators.js';
import { TabBase } from '@material/mwc-tab/mwc-tab-base';
import {styles as tabBarStyles} from '@material/mwc-tab/mwc-tab.css';
import styles from "./icon-tab.scss";

declare global {
  interface HTMLElementTagNameMap {
   'td-icon-tab': CovalentIconTabBase;
  }
}

@customElement('td-icon-tab')
export class CovalentIconTabBase extends TabBase {
  static override styles = [styles, tabBarStyles];
  @property({type: String}) secondLine = '';
  // Trying to figure out how to append text to a shadow DOM element
  // override connectedCallback() {
  //   super.connectedCallback();
  //   let span = document.createElement('span');
  //   span.textContent = this.secondLine;
  //   const button = this.shadowRoot!.querySelector(".mdc-tab")
  //   console.log(button);
  // }
}