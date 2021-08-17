import '@material/mwc-textfield';


export default {
  title: 'Example/Text field',
  argTypes: {
    style: {
      options: ['outlined', 'filled'],
      control: { type: 'radio' },
      defaultValue: 'outlined',
    },
  }
};

const Template = ({ icon, label, style, required, helper }) => {

    return `
        <mwc-textfield 
            label="${label ?? style}"
            ${style}
            ${icon ? `icon="${icon}"` : null}
            ${helper ? `helper="${helper}"` : null}
            ${required ? `required` : null }>
        </mwc-textfield>`;
};

export const Basic = Template.bind({});

export const Required = Template.bind({});
Required.args = {
    required: true,
};

export const Icon = Template.bind({});
Icon.args = {
    icon: 'houseboat',
}

export const HelperText = Template.bind({});
HelperText.args = {
    label: 'Click to see helper text',
    helper: 'Helper Text',
};