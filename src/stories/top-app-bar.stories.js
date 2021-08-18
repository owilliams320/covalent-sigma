import topAppBarComponent from "./demos/top-app-bar.component";

export default {
  title: "Example/Top App Bar",
  argTypes: {
    title: { control: "text" },
    centerTitle: {
      control: "boolean",
      defaultValue: false,
    },
    dense: {
      control: "boolean",
      defaultValue: false,
    },
    prominent: {
      control: "boolean",
      defaultValue: false,
    },
    showContent: {
      control: "boolean",
      defaultValue: false,
    },
    showActionItems: {
        options: ['buttons', 'icons'],
        control: { type: 'radio' },
        defaultValue: 'icons',
    },
    navClick: { action: "clicked" },
  },
  parameters: {
    layout: "fullscreen",
  },
};

export const Basic = topAppBarComponent.bind({});
Basic.args = {};

export const BasicWithButtons = topAppBarComponent.bind({});
BasicWithButtons.args = {
    showActionItems: 'buttons',
};

export const Fixed = topAppBarComponent.bind({});
Fixed.parameters = {
  fixed: true,
};

