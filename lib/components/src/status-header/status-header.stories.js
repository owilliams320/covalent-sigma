export default {
  title: 'Components/Status Header',
  parameters: {
      layout: "fullscreen",
  },
  argTypes: {
      label: { control: 'text', },
      color: {control: 'text', },
      header: {control: 'text', }
  }
};

export const Neutral = ({ label, color, icon, header}) => {
      return `
  <td-status-header labelText="${label}" state="${color}" ${icon ? `icon="${icon}"` : null } ${header ? `headerText="${header}"` : null}>
    <status-header-slot slot="status-header-text">[Insert Slot Text Here]</status-header-slot>
    <td-tab-bar slot="td-tab-bar" activeIndex="0">
          <td-tab null
                  label="Tab one">
          </td-tab>
          <td-tab null
                  label="Tab two">
          </td-tab>
          <td-tab null
                  label="Tab three">
          </td-tab>
        </td-tab-bar>
  </td-status-header>`;
};

        // <td-tab-bar activeIndex="0">
        //   <td-tab null
        //           label="Tab one">
        //   </td-tab>
        //   <td-tab null
        //           label="Tab two">
        //   </td-tab>
        //   <td-tab null
        //           label="Tab three">
        //   </td-tab>
        // </td-tab-bar> 


export const Running = Neutral.bind({});
Running.args = {
color: 'active',
label: 'You have unsaved changes',
icon: 'house',
header: 'Active',
};
export const Error = Neutral.bind({});
Error.args = {
color: 'negative',
label: 'The name field may not contain numbers',
icon: 'error',
header: 'Error',
};
export const Caution = Neutral.bind({});
Caution.args = {
color: 'caution',
label: 'These changes will increase your monthly spending rate',
icon: 'warning',
header: 'Caution',
};