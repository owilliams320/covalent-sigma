import { addHasRemoveClass, BaseElement } from '@material/mwc-base/base-element';
import { observer } from '@material/mwc-base/observer';
import { MDCBannerAdapter } from '@material/banner/adapter';
import { CloseReason, events, selectors } from '@material/banner/constants';

//TODO REMOVE ONCE default export is fixed
import MDCBannerFoundation from './foundation';

import { html, TemplateResult } from 'lit';
import { classMap } from 'lit/directives/class-map';
import { property, query } from 'lit/decorators';

export class StatusHeaderBase extends BaseElement {
  protected mdcFoundation!: MDCBannerFoundation;
  protected readonly mdcFoundationClass = MDCBannerFoundation;

  @query('.status-header') protected mdcRoot!: HTMLElement;
  @query(selectors.CONTENT) protected mdcContent!: HTMLElement;
  @query(selectors.PRIMARY_ACTION) protected primaryActionEl!: HTMLElement;

  @property({type: Boolean, reflect: true})
  /*
  @observer(function(this: StatusHeaderBase, value: boolean) {
    if (this.mdcFoundation) {
      if (value) {
        this.mdcFoundation.open();
      } else {
        this.mdcFoundation.close(this.reason);
        this.reason = CloseReason.UNSPECIFIED;
      }
    }
  })
  */
  open = true;

  @property({type: String}) labelText = '';

  @property({type: String}) icon = '';

  @property({type: String}) headerText = '';

  @property({type: Boolean}) centered = true;
   
  /**
   * The state representation active|negative|caution
   */
  @property()
  state?: 'active'|'negative'|'caution';
  
  protected reason: CloseReason = CloseReason.UNSPECIFIED;

  protected override render() {
    const classes = {
      //'mdc-banner': true,
      'negative': this.state === 'negative',
      'caution': this.state === 'caution',
      'active': this.state === 'active',
      //'mdc-banner--centered': this.centered,
    };
    return html`
    <div class="${classMap(classes)}">
      <div class="status-header" role="alertdialog" aria-live="assertive">
        <div class="status-header-title">Title</div>
        <div class="status-header-status">
          <div class="status-header-text" style="float:left">${this.icon ? this.renderIcon() : ''} </div>
          <div class="status-header-text" style="float:left">&nbsp${this.headerText}</div>
          <div class="status-header-text" style="float:left;font-size:small;">${this.labelText}</div>
        </div>
        <div class="status-header-slot">
          <slot name="status-header-text"></slot>
        </div>
        <slot name="td-tab-bar"></slot>
      </div>
    </div>`;
  }

  protected renderIcon(): TemplateResult {
    return html`
    <div class="mdc-banner__graphic" role="img" alt="">
      <slot name="icon">
        <td-icon class="mdc-banner__icon">
        ${this.icon}
        </td-icon>
      </slot>
    </div>`;
  }

  protected createAdapter(): MDCBannerAdapter {
    return {
      ...addHasRemoveClass(this.mdcRoot),
      getContentHeight: () => this.mdcContent.offsetHeight,
      setStyleProperty: (property: any, value: string) => this.mdcRoot.style.setProperty(property, value),
      trapFocus: () => this.primaryActionEl?.focus(),
      releaseFocus: () => this.primaryActionEl?.blur(),
      notifyClosed: (reason: CloseReason) => this.dispatchEvent(new CustomEvent(events.CLOSED, {bubbles: true, cancelable: true, detail: {reason: reason}})),
      notifyClosing: (reason: CloseReason) => this.dispatchEvent(new CustomEvent(events.CLOSING, {bubbles: true, cancelable: true, detail: {reason: reason}})),
      notifyOpened: () => this.dispatchEvent(new CustomEvent(events.OPENED, {bubbles: true, cancelable: true})),
      notifyOpening: () => this.dispatchEvent(new CustomEvent(events.OPENING, {bubbles: true, cancelable: true})),
    };
  }

  /** @export */
  show() {
    this.open = true;
  }

  /** @export */
  close(reason = CloseReason.UNSPECIFIED) {
    this.reason = reason;
    this.open = false;
  }

  // protected override firstUpdated() {
  //   super.firstUpdated();
  //   if (this.open) {
  //     this.mdcFoundation.open();
  //   }
  // }
}

//This was the original HTML for the status header with tabs with tabs
/* 
return html`
    <div class="${classMap(classes)}" role="banner">
      <div class="mdc-banner__content"
           role="alertdialog"
           aria-live="assertive">

        <div class="mdc-banner__graphic-text-wrapper">
          ${this.icon ? this.renderIcon() : ''}
          <div class="mdc-banner__text">${this.headerText}<br>${this.labelText}</div>
        </div>
        
        <div class="mdc-banner__graphic-text-wrapper" id='tabs'>
          <td-tab-bar activeIndex="0">
            <td-tab null
                    label="Tab one">
            </td-tab>
            <td-tab null
                    label="Tab two">
            </td-tab>
            <td-tab null
                    label="Tab three">
            </td-tab>
          </td-tab-bar>
        </div>
      </div>
    </div>`;
*/