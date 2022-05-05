import '@material/mwc-checkbox';
import '@material/mwc-formfield';

export default {
  title: 'Components/Checkbox',
  argTypes: {
    onClick: { action: 'onClick'}
  }
};

const Template = ({ disabled }) => {
    
    return `<mwc-checkbox
                ${disabled ? `disabled` : null }>
            </mwc-checkbox>
            <mwc-checkbox
                checked
                ${disabled ? `disabled` : null }>
            </mwc-checkbox>
            <mwc-checkbox
                indeterminate
                ${disabled ? `disabled` : null }>
            </mwc-checkbox>`;
};

const LabelTemplate = ({ label = 'Bananas', indeterminate }) => {
    
    return `
            <style>
                mwc-formfield {
                    display: block;
                }
                .child {
                    margin-left: 20px;
                }
            </style>
            <mwc-formfield label="${label}">
                <mwc-checkbox ${indeterminate ? `indeterminate` : null }></mwc-checkbox>
            </mwc-formfield>
            
            <mwc-formfield label="${label}">
                <mwc-checkbox class="child"></mwc-checkbox>
            </mwc-formfield>
            
            <mwc-formfield label="${label}">
                <mwc-checkbox class="child" checked></mwc-checkbox>
            </mwc-formfield>`;
};

export const Basic = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
}

export const WithLabel = LabelTemplate.bind({});
WithLabel.args = {
    indeterminate: true
};