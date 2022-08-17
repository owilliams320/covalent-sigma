import { withDesign } from "storybook-addon-designs";
import "./icon-tab-bar";
import "./icon-tab";

export default {
  title: "Components/Icon Tabs",
  argTypes: {
    icon: {
      control: "text",
      defaultValue: "description",
    },
    label: {
      control: "text",
      defaultValue: "label",
    },
    secondLine: {
      control: "text",
      defaultValue: "Secondary text",
    },
  },
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/RGYLmkueoutDtl6vQNZTJU/Tabs-with-icons?node-id=1570%3A3664",
    },
  },
};

export const Template = ({ icon, label, secondLine }) => {
  return `
        <td-icon-tab-bar>
            <td-icon-tab label="${label}" secondLine="${secondLine}" icon="${icon}"></td-icon-tab>
            <td-icon-tab label="${label}" secondLine="${secondLine}" icon="${icon}"></td-icon-tab>
            <td-icon-tab label="${label}" secondLine="${secondLine}" icon="${icon}"></td-icon-tab>
        </td-icon-tab-bar>
    `;
};
