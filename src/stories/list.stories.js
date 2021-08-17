import '@material/mwc-list/mwc-list';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-list/mwc-check-list-item.js';
import '@material/mwc-list/mwc-radio-list-item.js';
import '@material/mwc-icon';

export default {
  title: 'Example/List',
};

const BasicTemplate = ({ selected }) => {

    return `
    <mwc-list activatable>
        <mwc-list-item>Item 0</mwc-list-item>
        <mwc-list-item ${selected ? `selected activated` : null}>Item 1</mwc-list-item>
        <mwc-list-item>Item 2</mwc-list-item>
        <mwc-list-item>Item 3</mwc-list-item>
    </mwc-list>`;
};

const IconTemplate = ({ icon, iconStyle = 'avatar' }) => {

    return `
    <style>
    /* invert icon color */
    mwc-icon {
        background-color: gray;
        color: white;
    }
    </style>
    <mwc-list>
        <mwc-list-item graphic="${iconStyle}">
            <span>${iconStyle} 0</span>
            <mwc-icon slot="graphic">${icon}</mwc-icon>
        </mwc-list-item>
        <mwc-list-item graphic="${iconStyle}">
            <span>${iconStyle} 2</span>
            <mwc-icon slot="graphic">${icon}</mwc-icon>
        </mwc-list-item>
        <mwc-list-item graphic="${iconStyle}">
            <span>${iconStyle} 3</span>
            <mwc-icon slot="graphic">${icon}</mwc-icon>
        </mwc-list-item>
        <mwc-list-item graphic="${iconStyle}">
            <span>${iconStyle} 4</span>
            <mwc-icon slot="graphic">${icon}</mwc-icon>
        </mwc-list-item>
        <mwc-list-item graphic="${iconStyle}">
            <span>${iconStyle} 5</span>
            <mwc-icon slot="graphic">${icon}</mwc-icon>
        </mwc-list-item>
    </mwc-list>`;
};

const TwoLineTemplate = ({ icon, style, required, helper }) => {

    return `
    <mwc-list>
        <mwc-list-item twoline>
            <span>Item 0</span>
            <span slot="secondary">Secondary line</span>
        </mwc-list-item>
        <mwc-list-item twoline>
            <span>Item 1</span>
            <span slot="secondary">Secondary line</span>
        </mwc-list-item>
        <mwc-list-item twoline>
            <span>Item 2</span>
            <span slot="secondary">Secondary line</span>
        </mwc-list-item>
        <mwc-list-item twoline>
            <span>Item 3</span>
            <span slot="secondary">Secondary line</span>
        </mwc-list-item>
    </mwc-list>`;
};

const CheckRadioTemplate = ({ listType }) => {

    return `
    <mwc-list multi>
        <mwc-${listType}-list-item selected>Item 0</mwc-${listType}-list-item>
        <mwc-${listType}-list-item selected>Item 1</mwc-${listType}-list-item>
        <li divider role="separator" padded></li>
        <mwc-${listType}-list-item left selected>Item 2 (left)</mwc-${listType}-list-item>
        <mwc-${listType}-list-item left>Item 3 (left)</mwc-${listType}-list-item>
    </mwc-list>`;
};

export const Basic = BasicTemplate.bind({});
Basic.args = {
    selected: false
}

export const IconGraphic = IconTemplate.bind({});
IconGraphic.args = {
    icon: 'folder',
    iconStyle: 'avatar'
}
IconGraphic.argTypes = {
    iconStyle: {
        options: ['avatar', 'icon', 'medium', 'large'],
        control: { type: 'radio' },
    },
}

export const TwoLine = TwoLineTemplate.bind({});

export const ChecksAndRadios = CheckRadioTemplate.bind({});
ChecksAndRadios.argTypes = {
    listType: {
        options: ['check', 'radio'],
        control: { type: 'radio' },
        defaultValue: 'check',
    },
}