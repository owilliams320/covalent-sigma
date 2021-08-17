import '@material/mwc-switch';
import '@material/mwc-formfield';

export default {
  title: 'Example/Switch',
  argTypes: {
    disabled:  {
        control: 'boolean',
    },
    checked: {
        control: 'boolean',
    },
    label:  { control: 'text' },
    onChange: { action: 'onChange'}
  }
};

const Template = ({ disabled, label, checked, onChange }) => {
    const switchInput = document.createElement('mwc-switch');
    switchInput.checked = checked;
    switchInput.disabled = disabled;

    switchInput.addEventListener('change', onChange);

    if (label) {
        const formfield = document.createElement('mwc-formfield');
        formfield.label = label;
        formfield.appendChild(switchInput);

        return formfield;
    }

    return switchInput;
};

export const Basic = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = {
    label: 'Bananas'
};