import { html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators.js';

export class CardBase extends LitElement {
  /**
   * The title of the card
   */
  @property()
  cardTitle = '';

  /**
   * The sub-title of the card
   */
  @property()
  subTitle = '';
  /**
   * Displays the action bar
   */
  @property({type: Boolean}) actionBar = false;
  /**
   * Style the card as an outline variant
   */
  @property({type: Boolean}) outlined = false;
  @property({type: Boolean}) divider = false;
  @property({type: Boolean}) ripple = false;

  @property({type: String}) sourceType = '';
  @property({type: String}) sourceCreator = '';
  override render() {
    const classes = {
      'mdc-card': true,
      'mdc-card--outlined': this.outlined,
    };
    const divider = {
      'divider': this.divider,
    };
    const sourceType = {
      'project': this.sourceType == 'project',
      'dataset': this.sourceType == 'dataset',
      'article': this.sourceType == 'article',
      'file': this.sourceType == 'file',
    }
    return html`
      <div class="${classMap(classes)}">
      <div class="mdc-card__primary-action">
          <div class="categoryContainer">
            <div class="category ${classMap(sourceType)}">
              <td-icon>
                ${this.sourceType == 'project' ? 'folder' : 
                  this.sourceType == 'dataset' ? 'database' :
                  this.sourceType == 'file' ? 'description' :
                  'bookmark'
                }
              </td-icon>
              <div>${this.sourceType.charAt(0).toUpperCase() + this.sourceType.slice(1)}</div>
            </div>
            <div class="sourceCreator">${this.sourceCreator}</div>
          </div>
          ${this.cardTitle ? 
            html`
              <div class="mdc-card__actions mdc-typography--headline5 ${classMap(divider)}">${this.cardTitle}</div>
            ` : ''}
            <slot name="card-content" class="${this.ripple ? 'mdc-card__ripple' : ''}"></slot>
            <slot name="empty-state"></slot>
          </div>
          ${this.actionBar ? 
          html`
            <div class="mdc-card__actions">
              <slot name="card-actions"></slot>
            </div>
          ` : ''}
      </div>`;
  }
}