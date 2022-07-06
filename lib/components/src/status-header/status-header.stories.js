export default {
  title: 'Components/Status Header',
  parameters: {
      layout: "fullscreen",
  },
  argTypes: {
      label: { control: 'text', },
      color: {control: 'text', }
  }
};

export const Neutral = ({ label, color, icon}) => {
      return `
  <td-status-header labelText="${label}" state="${color}" ${icon ? `icon="${icon}"` : null }>
    
  </td-status-header>`;
};

export const Running = Neutral.bind({});
Running.args = {
color: 'active',
label: 'You have unsaved changes',
icon: 'house',
};
export const Error = Neutral.bind({});
Error.args = {
color: 'negative',
label: 'The name field may not contain numbers',
icon: 'error',
};
export const Caution = Neutral.bind({});
Caution.args = {
color: 'caution',
label: 'These changes will increase your monthly spending rate',
icon: 'warning',
};