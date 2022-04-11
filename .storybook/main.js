const covalentWebpack = require('../webpack.config.js');

module.exports = {
  'stories': [
    '../src/stories/**/*.stories.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-essentials',
      options: {
        //docs: false,
        backgrounds: false,
        outline: false,
      }
    },
    'storybook-dark-mode',
    'storybook-addon-designs',
  ],
  webpackFinal: (config) => {
    return Object.assign({}, config, {module:{rules: [...config.module.rules, ...covalentWebpack.module.rules] }});
  },
}