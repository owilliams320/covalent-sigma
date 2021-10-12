import '@material/mwc-icon/mwc-icon';

export default {
  title: 'Example/Action ribbon',
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    label: { control: 'text', defaultValue: 'No changes' },
    icon:  {
      control: 'text',
    },
    onClick: { action: 'onClick'}
  }
};

export const Basic = ({ label, color, icon, saveDisabled = true }) => {
  document.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('td-action-ribbon');
    const bannerTarget = document.querySelectorAll('mwc-button');

    banner.show()

    bannerTarget.forEach((el)=>{
      el.addEventListener('click', ( ) => {
        return banner.open ? banner.close() : banner.show();
      });

    });
  }, { once : true });

  return `
    <style>
    .show-banner-button {
      margin: 16px;
    }
    </style>
    <td-action-ribbon labelText="${label}" state="${color}" ${icon ? `icon="${icon}"` : null }>
      <mwc-button slot="action-items" outlined>Cancel</mwc-button>
      <mwc-button slot="action-items" ${saveDisabled ? 'disabled' : null } raised>Save</mwc-button>
    </td-action-ribbon>
    <mwc-button class="show-banner-button">Toggle Banner</mwc-button>`;
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
