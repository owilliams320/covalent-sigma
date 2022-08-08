import { RadioBase } from '@material/mwc-radio/mwc-radio-base';
import { styles as radioStyle } from '@material/mwc-radio/mwc-radio.css';
import styles from './icon-toggle.scss';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

declare global {
    interface HTMLElementTagNameMap {
        'td-icon-radio-item': CovalentIconRadioToggleBase;
    }
}

@customElement('td-icon-radio-item')
export class CovalentIconRadioToggleBase extends RadioBase {
    static override styles = [styles, radioStyle];  
    @property({type:String}) width = "204";
    @property({type:String}) height = "162";
    @property({type:Boolean}) iconOnly = false;
    override render() {
    const classes = {
        'checked': this.checked,
    };
    return html`
        <div class="${classMap(classes)} container" style="--width:${this.width == 'fill' ? `100%` : `${this.width}px`}; --height:${this.height}px;" @click="${() => {this.checked = true}}">
            <input type="radio" class="mdc-radio__native-control"></input>
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
}