import { TextFieldBase } from '@material/mwc-textfield/mwc-textfield-base';
import { styles } from '@material/mwc-textfield/mwc-textfield.css';
import { customElement } from 'lit/decorators';

declare global {
    interface HTMLElementTagNameMap {
        'td-textfield': CovalentTextFieldBase;
    }
}

@customElement('td-textfield')
export class CovalentTextFieldBase extends TextFieldBase {

  static override styles = [styles];  
}