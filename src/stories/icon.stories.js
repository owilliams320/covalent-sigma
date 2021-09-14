import { withDesign } from 'storybook-addon-designs'
import '@material/mwc-icon';
import iconList from '../assets/codepoints.json';

const ICON_LIST = Object.keys(iconList);

export default {
  title: 'Example/Icon',
  argTypes: {
    // icon:  {
    //     options: ICON_LIST,
    //     control: { type: 'select' },
    // },
    onClick: { action: 'onClick'}
  },
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/aDX2Rc1OIJ9tWgMcAvKRXv/Section?node-id=22%3A1453',
    },
  }
};

const Template = ({ }) => {
  const container = document.createElement('div');

  ICON_LIST.forEach((icon) => {
      const icoElem = document.createElement('mwc-icon');
      icoElem.innerText = icon;
      icoElem.style.padding = `8px`;
      container.appendChild(icoElem);
  });

  return container;
};

export const Playground = Template.bind({});
