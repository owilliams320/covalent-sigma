
import darkTheme from './covalent.dark.theme';
import lightTheme from './covalent.light.theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'twitter',
    values: [
      {
        name: 'twitter',
        value: '#00aced',
      },
      {
        name: 'facebook',
        value: '#3b5998',
      },
    ],
    grid: {
      disable: true,
    }
  },
  darkMode: {
    // Override the default dark theme
    dark: { 
      ...darkTheme,
    },
    // Override the default light theme
    light: lightTheme,

    // Add dark and light class to preview
    stylePreview: true,
  },
  layout: 'centered'
}