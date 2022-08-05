import { withDesign } from "storybook-addon-designs";
import "./icon-check-toggle";
import "./icon-radio-toggle";

export default {
  title: "Components/Icon Toggle",
  argTypes: {
    // icon: {
    //   control: "text",
    //   defaultValue: "work",
    // },
    // firstLine: {
    //   control: "text",
    //   defaultValue: "First line.",
    // },
    // secondLine: {
    //   control: "text",
    //   defaultValue: "Second line.",
    // },
    width: {
      control: "text",
      defaultValue: "204",
    },
    height: {
      control: "text",
      defaultValue: "162",
    },
  },
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      //   url: "https://www.figma.com/file/b7geqz0aCeDo4NbzTBWAiw/Empty-states?node-id=19%3A115",
    },
  },
};

export const Template = ({ width, height }) => {
  return `
    <td-icon-check-item width="${width}" height="${height}">
      <td-icon slot="icon">work</td-icon>
      <div slot="text">Balanced</div>
      <div slot="text">Every week</div>
    </td-icon-check-item>
    <td-icon-check-item width="${width}" height="${height}">
      <td-icon slot="icon">work</td-icon>
      <div slot="text">Balanced</div>
      <div slot="text">Every week</div>
    </td-icon-check-item>
    <br>
    <td-icon-radio-item width="${width}" height="${height}">
      <td-icon slot="icon">work</td-icon>
      <div slot="text">Balanced</div>
      <div slot="text">Every week</div>
    </td-icon-radio-item>
    <td-icon-radio-item width="${width}" height="${height}">
      <td-icon slot="icon">work</td-icon>
      <div slot="text">Balanced</div>
      <div slot="text">Every week</div>
    </td-icon-radio-item>
    <td-radio></td-radio>
  `;
};
