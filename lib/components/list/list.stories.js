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
        <li><td-list-item>Item 0</td-list-item></li>
        <li><td-list-item ${selected ? `selected activated` : null}>Item 1</td-list-item></li>
        <li><td-list-item>Item 2</td-list-item></li>
        <li><td-list-item>Item 3</td-list-item></li>
    </mwc-list>`;
};

const IconTemplate = ({ icon, iconStyle = 'avatar' }) => {

    return `
    <mwc-list>
        <li><td-list-item graphic="${iconStyle}">
            <span>${iconStyle} 0</span>
            <mwc-icon slot="graphic">${icon}</mwc-icon>
        </td-list-item></li>
        <li><td-list-item graphic="${iconStyle}">
            <span>${iconStyle} 2</span>
            <mwc-icon slot="graphic">${icon}</mwc-icon>
        </td-list-item></li>
        <li><td-list-item graphic="${iconStyle}">
            <span>${iconStyle} 3</span>
            <mwc-icon slot="graphic">${icon}</mwc-icon>
        </td-list-item></li>
        <li><td-list-item graphic="${iconStyle}">
            <span>${iconStyle} 4</span>
            <mwc-icon slot="graphic">${icon}</mwc-icon>
        </td-list-item></li>
        <li><td-list-item graphic="${iconStyle}">
            <span>${iconStyle} 5</span>
            <mwc-icon slot="graphic">${icon}</mwc-icon>
        </td-list-item></li>
    </mwc-list>`;
};

const TwoLineTemplate = ({ icon, style, required, helper }) => {

    return `
    <mwc-list>
        <li><td-list-item twoline>
            <span>Item 0</span>
            <span slot="secondary">Secondary line</span>
        </td-list-item></li>
        <li><td-list-item twoline>
            <span>Item 1</span>
            <span slot="secondary">Secondary line</span>
        </td-list-item></li>
        <li><td-list-item twoline>
            <span>Item 2</span>
            <span slot="secondary">Secondary line</span>
        </td-list-item></li>
        <li><td-list-item twoline>
            <span>Item 3</span>
            <span slot="secondary">Secondary line</span>
        </td-list-item></li>
    </mwc-list>`;
};

const CheckRadioTemplate = ({ listType }) => {

    return `
    <mwc-list multi>
        <li><mwc-${listType}-list-item selected>Item 0</mwc-${listType}-list-item></li>
        <li><mwc-${listType}-list-item selected>Item 1</mwc-${listType}-list-item></li>
        <li divider role="separator" padded></li>
        <li><mwc-${listType}-list-item left selected>Item 2 (left)</mwc-${listType}-list-item></li>
        <li><mwc-${listType}-list-item left>Item 3 (left)</mwc-${listType}-list-item></li>
    </mwc-list>`;
};

const SubItemTemplate = ({ selected }) => {
    return `
    <mwc-list activatable>
        <li><td-list-item>Item 0</td-list-item></li>
        <li><td-list-item graphic="avatar" ${selected ? `selected activated` : null} hasChildren>
          Item 1
            <mwc-icon slot="graphic">settings</mwc-icon>
        </td-list-item></li>
        <li><td-list-item childItem> SubItems 0</td-list-item></li>
        <li><td-list-item>Item 2</td-list-item></li>
        <li><td-list-item>Item 3</td-list-item></li>
    </mwc-list>`;
};


export const Basic = BasicTemplate.bind({});
Basic.args = {
    selected: false
}

export const WithAvatar = IconTemplate.bind({});
WithAvatar.args = {
    icon: 'folder',
    iconStyle: 'avatar'
}
WithAvatar.argTypes = {
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

export const SubItems = SubItemTemplate.bind({});