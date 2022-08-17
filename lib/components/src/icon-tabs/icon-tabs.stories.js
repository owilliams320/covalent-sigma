import { withDesign } from "storybook-addon-designs";
import "./icon-tab-bar";
import "./icon-tab";

export default {
  title: "Components/Icon Tabs",
  argTypes: {},
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/b7geqz0aCeDo4NbzTBWAiw/Empty-states?node-id=19%3A115",
    },
  },
};

export const Template = ({}) => {
  return `
        <td-icon-tab-bar>
            <td-icon-tab label="tabOne" secondLine="Hello" icon="description"></td-icon-tab>
            <td-icon-tab label="tabOne" secondLine="Some" icon="description"></td-icon-tab>
            <td-icon-tab label="tabOne" secondLine="Text" icon="description"></td-icon-tab>
        </td-icon-tab-bar>
    `;
};
