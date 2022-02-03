import { withDesign } from 'storybook-addon-designs'
import '@material/mwc-button';

export default {
  title: 'Example/Button',
  argTypes: {
    label: { control: 'text', defaultValue: 'Button' },
    icon:  {
      control: 'text',
    },
    trailingIcon:  {
      control: 'boolean',
      defaultValue: false,
    },
    style: {
      control: {
        disable: true
      }
    },
    disabled:  {
      control: 'boolean',
      defaultValue: false,
    },
    dense:  {
      control: 'boolean',
      defaultValue: false,
    },
    onClick: { action: 'onClick'}
  },
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/aDX2Rc1OIJ9tWgMcAvKRXv/Section?node-id=22%3A1453',
    },
  }
};

const Template = ({ label, trailingIcon, icon, style, disabled, dense }) => {

  return `<mwc-button id="myButton"
                      label="${label}"
                      ${trailingIcon ? `trailingIcon` : null }
                      ${icon ? `icon="${icon}"` : null }
                      ${dense ? 'dense' : null }
                      ${disabled ? 'disabled' : null }
                      ${style}>
         </mwc-button>`;
};

export const Contained = Template.bind({});
Contained.args = {
  style: 'raised',
};

export const Outlined = Template.bind({});
Outlined.args = {
  style: 'outlined',
};

export const Text = Template.bind({});

export const dense = Template.bind({});
dense.args = {
  dense: true,
  style: 'raised',
};