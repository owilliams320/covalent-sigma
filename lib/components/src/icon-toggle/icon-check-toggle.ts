import { CheckboxBase } from '@material/mwc-checkbox/mwc-checkbox-base';
import { styles as checkboxStyle } from '@material/mwc-checkbox/mwc-checkbox.css';
import styles from './icon-toggle.scss';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

declare global {
    interface HTMLElementTagNameMap {
        'td-icon-check-item': CovalentIconCheckToggleBase;
    }
}

@customElement('td-icon-check-item')
export class CovalentIconCheckToggleBase extends CheckboxBase {
    static override styles = [styles, checkboxStyle];
    @property({type:String}) width = "204";
    @property({type:String}) height = "162";
    @property({type:Boolean}) iconOnly = false;
    override render() {
    const classes = {
        'checked': this.checked,
    };
    return html`
        <div class="${classMap(classes)} container" style="--width:${this.width == 'fill' ? `100%` : `${this.width}px`}; --height:${this.height}px;" @click="${this._handleClick}">
            <input type="checkbox" class="mdc-checkbox__native-control"></input>
            <div class="mdc-toggle__background">
                <svg class="mdc-toggle__checkmark ${this.checked ? 'showCheck' : ''}" viewBox="0 0 24 24">
                    <path class="mdc-toggle__checkmark-path ${this.checked ? 'showCheck' : ''}" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
                </svg>
            </div>
            <slot name="icon"></slot>
            ${this.iconOnly ? '' : html`<div><slot name="text"></slot></div>` }
        </div>
    `
  }
  private _handleClick() {
    this.checked = !this.checked;
  }
}