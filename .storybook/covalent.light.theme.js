import { create } from '@storybook/theming';

import brandImage from '../stories/assets/teradata-dark.svg';
import { themes } from '@storybook/theming';

export default create({
  base: 'light',
  colorPrimary: '#43515a',
  colorSecondary: '#007373',
  brandTitle: 'Teradata Design System',
  brandUrl: 'https://github.com/storybookjs/storybook-addon-console',
  brandImage,
  appContentBg: '#ffffff',
  appBg: '#f5f5f5',
  barBg: '#fafafa',
  barSelectedColor: '#007373',
  background: { content: 'red' },
  inputBg: 'transparent',


  // Text colors
  textColor: 'rgba(0,0,0,0.87)',
  textInverseColor: '#fff',

  addonActionsTheme: {
    // ...chromeLight,
    // BASE_FONT_FAMILY: typography.fonts.mono,
    BASE_BACKGROUND_COLOR: 'white',
  },
});
