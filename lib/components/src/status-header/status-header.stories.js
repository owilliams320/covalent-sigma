export default {
  title: 'Components/Status Header',
  parameters: {
      layout: "fullscreen",
  },
  argTypes: {
      //label: { control: 'text', },
      color: {control: 'text', },
      //header: {control: 'text', },
      title: {control: 'text', }
  }
};

export const Neutral = ({ label, color, icon, header, title}) => {
      if(color == 'active') {
        icon = 'house';
        header = 'Active';
        label = 'Running'
      } else if (color == 'caution') {
        icon = 'warning';
        header = 'Caution';
        label = 'caution'
      } else if (color == 'error') {
        icon = 'error';
        header = 'Error';
        label = 'error'
      }
  return `
  <td-status-header labelText="${label}" state="${color}" ${icon ? `icon="${icon}"` : null } ${header ? `headerText="${header}"` : null} titleText="${title}">

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

export const Running = Neutral.bind({});
Running.args = {
color: 'active',
title: 'Active',
};
export const Error = Neutral.bind({});
Error.args = {
color: 'error',
title: 'Error',
};
export const Caution = Neutral.bind({});
Caution.args = {
color: 'caution',
title: 'Caution',
};