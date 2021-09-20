import { create } from '@storybook/theming';
import brandImage from '../src/assets/teradata.svg';

export default create({
  base: 'dark',
  colorPrimary: '#afb6b9',
  colorSecondary: '#59cecd',
  brandTitle: 'Teradata Design System',
  //brandUrl: 'https://github.com/owilliams320/covalent-sigma',
  brandImage,
  appContentBg: '#161c1f',
  // appBorderColor: 'pink',
  appBg: '#000',
  barBg: '#161c1f',
  barSelectedColor: '#59cecd',
  inputBg: 'transparent',

  // Text colors
  textColor: 'rgba(255,255,255,0.87)',
  textInverseColor: 'red',

  addonActionsTheme: {
    // ...chromeLight,
    // BASE_FONT_FAMILY: typography.fonts.mono,
    BASE_BACKGROUND_COLOR: 'black',
  },
});
