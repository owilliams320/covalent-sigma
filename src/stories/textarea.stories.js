import '@material/mwc-textarea';

export default {
  title: 'Example/Textarea',
  argTypes: {
    style: {
      options: ['outlined', 'filled'],
      control: { type: 'radio' },
      defaultValue: 'outlined',
    },
  }
};

const Template = ({ label, style, required, helper }) => {

    return `
        <mwc-textarea 
            label="${label ?? style}"
            ${style}
            ${helper ? `helper="${helper}"` : null}
            ${required ? `required` : null }>
        </mwc-textarea>`;
};

export const Basic = Template.bind({});

export const Required = Template.bind({});
Required.args = {
    required: true,
};

export const HelperText = Template.bind({});
HelperText.args = {
    label: 'Click to see helper text',
    helper: 'Helper Text',
};