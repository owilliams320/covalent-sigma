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
  @property({type: String}) secondLine = 'Label';
  
  override firstUpdated() {
    super.firstUpdated();
    let contentContainer = this.shadowRoot!.querySelector('span.mdc-tab__content');
    
    let span = document.createElement('div');
    span.textContent = this.secondLine;
    span.classList.add('secondLine');
    
    contentContainer?.appendChild(span);
  }
}