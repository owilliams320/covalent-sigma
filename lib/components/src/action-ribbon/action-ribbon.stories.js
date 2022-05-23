
export default {
    title: 'Components/Action Ribbon',
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {
        label: { control: 'text', },
        icon: {
            control: 'text',
        },
        onClick: { action: 'onClick' }
    }
};

export const Basic = ({ label, color, icon, saveDisabled = true }) => {
        document.addEventListener('DOMContentLoaded', () => {
            const banner = document.querySelector('td-action-ribbon');
            const bannerTarget = document.querySelectorAll('td-button');

            banner.show()

            bannerTarget.forEach((el) => {
                el.addEventListener('click', () => {
                    return banner.open ? banner.close() : banner.show();
                });
            });
        }, { once: true });

        return `
    <style>
    .show-banner-button {
      margin: 16px;
    }
    </style>
    <td-action-ribbon labelText="${label}" state="${color}" ${icon ? `icon="${icon}"` : null }>
      <td-button slot="action-items" outlined>Cancel</td-button>
      <td-button slot="action-items" ${saveDisabled ? 'disabled' : null } raised>Save</td-button>
    </td-action-ribbon>
    <td-button class="show-banner-button">Toggle Banner</td-button>`;
};

export const Active = Basic.bind({});
Active.args = {
  color: 'active',
  label: 'You have unsaved changes',
  saveDisabled: false,
};
export const Positive = Basic.bind({});
Positive.args = {
  color: 'positive',
  label: '(3/3) items selected',
  icon: 'check',
  saveDisabled: false,
};
export const Negative = Basic.bind({});
Negative.args = {
  color: 'negative',
  label: 'The name field may not contain numbers',
  icon: 'error'
};
export const Caution = Basic.bind({});
Caution.args = {
  color: 'caution',
  label: 'These changes will increase your monthly spending rate',
  icon: 'warning',
  saveDisabled: false,
};