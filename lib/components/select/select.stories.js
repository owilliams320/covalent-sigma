import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';

export default {
  title: 'Components/Select',
  argTypes: {
    style: {
        options: ['outlined', 'filled'],
        control: { type: 'radio' },
        defaultValue: 'outlined',
    },
    required: {
        control: 'boolean',
    },
    onSelect: { action: 'onClick'}
  }
};

const Template = ({ icon, style, required, helper }) => {

    return `
        <mwc-select
            label="${style}"
            validationMessage="This Field is Required"
            ${style}
            ${icon ? `icon="${icon}"` : null}
            ${helper ? `helper="${helper}"` : null}
            ${required ? `required` : null }>
            <mwc-list-item selected></mwc-list-item>
            <mwc-list-item ${icon ? `graphic="icon"` : null } value="0">Item 0</mwc-list-item>
            <mwc-list-item ${icon ? `graphic="icon"` : null } value="1">Item 1</mwc-list-item>
            <mwc-list-item ${icon ? `graphic="icon"` : null } value="2">Item 2</mwc-list-item>
            <mwc-list-item ${icon ? `graphic="icon"` : null } value="3">Item 3</mwc-list-item>
        </mwc-select>`;
};

export const Basic = Template.bind({});

export const Required = Template.bind({});
Required.args = {
    required: true,
};

export const Icon = Template.bind({});
Icon.args = {
    icon: 'event',
};

export const HelperText = Template.bind({});
HelperText.args = {
    helper: 'Helper Text',
};