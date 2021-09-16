import { html } from 'lit-html';
import '@material/mwc-icon-button';
import iconList from '../assets/codepoints.json';


export default {
  title: 'Example/IconButton',
  argTypes: {
    icon:  {
      control: 'select',
      options: Object.keys(iconList),
      defaultValue: 'houseboat',
    },
    disabled:  {
      control: 'boolean',
      defaultValue: false,
    },
    onClick: { action: 'onClick'}
  }
};

const Template = ({ disabled, icon, onClick }) => {
  return `
    <mwc-icon-button id="myIconButton"
      ${icon ? `icon="${icon}"` : null }
      ${disabled ? `disabled` : null }>
    </mwc-icon-button>`;
};

export const Basic = Template.bind({});
