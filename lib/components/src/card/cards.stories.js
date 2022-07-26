import './card';
import * as tableContent from '../../../../stories/demos/table.content.html';


export default {
  title: 'Components/Cards',
  argTypes: {
    outlined: {
      control: 'boolean',
      defaultValue: false,
    },
    actionBar: {
      control: 'boolean',
      defaultValue: true,
    },
    cardTitle: {
      control: 'text',
      defaultValue: ''
    },
    divider: {
      control: 'boolean',
      defaultValue: true,
    },
    ripple: {
      control: 'boolean',
      defaultValue: false,
    },
    sourceType: {
      control: 'select',
      options: ['project', 'dataset', 'article'],
    },
    sourceCreator: {
      control: 'text',
    }
  },
};

export const Basic = ({ outlined, actionBar, cardTitle, divider, ripple, sourceType, sourceCreator }) => {
return `
  <td-card 
    cardTitle='${cardTitle}'
    sourceType='${sourceType}'
    sourceCreator='${sourceCreator}'
    ${actionBar ? 'actionBar' : ''}
    ${outlined ? 'outlined' : ''}
    ${divider ? 'divider' : ''}
    ${ripple ? 'ripple' : ''}
  >
    <div slot="card-content">${tableContent}</div>
    <div slot="card-actions" class="mdc-card__action-buttons">
      <button class="mdc-button mdc-card__action mdc-card__action--button">
        <div class="mdc-button__ripple"></div>
        <span class="mdc-button__label">Action 1</span>
      </button>
      <button class="mdc-button mdc-card__action mdc-card__action--button">
        <div class="mdc-button__ripple"></div>
        <span class="mdc-button__label">Action 2</span>
      </button>
    </div>
    <div slot="card-actions" class="mdc-card__action-icons">
      <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
        title="Share">share</button>
      <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
        title="More options">more_vert</button>
    </div>
  </td-card>
  `;
};

export const Outline = Basic.bind({})
Outline.args = {
  outlined: true,
  cardTitle: '',
}