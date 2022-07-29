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

  @property()state?: 'active'|'positive'|'caution'|'error'|'pending'|'paused';
  @property({type: String}) statusText = '';
  @property({type: String}) titleText = '';
  
  protected reason: CloseReason = CloseReason.UNSPECIFIED;

  protected override render() {
    const classes = {
      'active': this.state === 'active',
      'caution': this.state === 'caution',
      'error': this.state === 'error',
      'positive': this.state === 'positive',
    };

    return html`
      <div class="status-header ${classMap(classes)}" role="alertdialog" aria-live="assertive">
        <div class="status-header-title">
          <div class="status-header-title-text">${this.titleText}</div>
        </div>
        <div class="status-header-status">
          <div class="status-header-icon">${this.renderIcon()}</div>
          <div class="status-header-text-block">
            <div class="status-header-text">${this.statusText}</div>
            <div class="status-header-helper">Status</div>
          </div>
          <div class="status-header-slot">
            <slot name="status-header-text"></slot>
          </div>
        </div>
        <slot name="td-tab-bar"></slot>
      </div>
    `;
  }

  protected renderIcon(): TemplateResult {
    if (this.state === 'active') {
      return html`<td-circular-progress indeterminate density="-2"></td-circular-progress>`;
    } else if (this.state === 'pending') {
      return html`<td-icon class="covalent-icon">loader_dots</td-icon>`;
    } else {
      return html`<td-icon>${this.getMaterialIcon(this.state)}</td-icon>`;
    }
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
  protected getMaterialIcon(state: string|undefined): string {
    let icon: string = 'question_mark';

    switch (state) {
      case 'caution':
        icon = 'warning';
        break;

      case 'error':
        icon = 'error';
        break;

      case 'positive':
        icon = 'done';
        break;

      case 'paused':
        icon = 'pause';
        break;

      default:
        icon = 'question_mark';
        break;
    }

    return icon;
  }
}
