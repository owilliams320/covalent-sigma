import '@material/mwc-tab-bar';
import '@material/mwc-tab';

export default {
  title: 'Example/Tabs',
  argTypes: {
    onClick: { action: 'onClick'}
  }
};

const Template = ({ icon, activeIndex = 0 }) => {

    return `
        <mwc-tab-bar activeIndex="${activeIndex}">
            <mwc-tab ${icon ? `icon="${icon}"` : null }
                     label="Tab one">
            </mwc-tab>
            <mwc-tab ${icon ? `icon="${icon}"` : null }
                     label="Tab two">
            </mwc-tab>
            <mwc-tab ${icon ? `icon="${icon}"` : null }
                     label="Tab three">
            </mwc-tab>
        </mwc-tab-bar>`;
};

export const Basic = Template.bind({});


export const Icon = Template.bind({});
Icon.args = {
    icon: 'houseboat',
}

export const Preselected = Template.bind({});
Preselected.args = {
    activeIndex: 1,
}