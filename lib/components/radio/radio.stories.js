import '@material/mwc-radio';
import '@material/mwc-formfield';

export default {
  title: 'Example/Radio',
  argTypes: {
    onClick: { action: 'onClick'}
  }
};

const Template = ({ disabled }) => {
    
    return `<mwc-radio
                ${disabled ? `disabled` : null }>
            </mwc-radio>
            <mwc-radio
                checked
                ${disabled ? `disabled` : null }>
            </mwc-radio>
            <mwc-radio
                indeterminate
                ${disabled ? `disabled` : null }>
            </mwc-radio>`;
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
                <mwc-radio ${indeterminate ? `indeterminate` : null }></mwc-radio>
            </mwc-formfield>
            
            <mwc-formfield label="${label}">
                <mwc-radio class="child"></mwc-radio>
            </mwc-formfield>
            
            <mwc-formfield label="${label}">
                <mwc-radio class="child" checked></mwc-radio>
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