import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import styles from './mini-list.scss';

 /**
  * Mini list
  *
  * @slot - This element has a slot
  */
 @customElement('td-mini-list')
 export class CovalentMiniList extends LitElement {

   static override styles = [styles];

   override render() {
    return html`
        <slot></slot>
    `;
   }
 }

 declare global {
   interface HTMLElementTagNameMap {
    'td-mini-list': CovalentMiniList;
   }
 }