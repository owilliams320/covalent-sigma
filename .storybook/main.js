module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    {
      name: '@storybook/addon-essentials',
      options: {
        //docs: false,
        backgrounds: false,
        outline: false,
      }
    },
    "storybook-dark-mode",
    "storybook-addon-designs",
  ]
}