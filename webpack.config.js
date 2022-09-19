const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: {
      index: './lib/components/src/index.ts',
      styles: './lib/components/styles/styles.scss',
      theme: './lib/components/styles/theme/theme.scss',

      actionRibbon: './lib/components/src/action-ribbon/action-ribbon.ts',
      alert: './lib/components/src/alert/alert.ts',
      appShell: './lib/components/src/app-shell/app-shell.ts',
      button: './lib/components/src/button/button.ts',
      checkbox: './lib/components/src/checkbox/checkbox.ts',
      circularProgress: './lib/components/src/circular-progress/circular-progress.ts',
      dialog: './lib/components/src/dialog/dialog.ts',
      drawer: './lib/components/src/drawer/drawer.ts',
      formField: './lib/components/src/formfield/formfield.ts',
      icon: './lib/components/src/icon/icon.ts',
      iconButton: './lib/components/src/icon-button/icon-button.ts',
      linearProgress: './lib/components/src/linear-progress/linear-progress.ts',
      list: './lib/components/src/list/list.ts',
      listItem: './lib/components/src/list/list-item.ts',
      listExpansion: './lib/components/src/list/list-expansion.ts',
      listRadioItem: './lib/components/src/list/radio-list-item.ts',
      menu: './lib/components/src/menu/menu.ts',
      radio: './lib/components/src/radio/radio.ts',
      select: './lib/components/src/select/select.ts',
      slider: './lib/components/src/slider/slider.ts',
      sliderRange: './lib/components/src/slider/slider-range.ts',
      snackBar: './lib/components/src/snackbar/snackbar.ts',
      statusHeader: './lib/components/src/status-header/status-header.ts',
      switch: './lib/components/src/switch/switch.ts',
      tab: './lib/components/src/tab/tab.ts',
      tabBar: './lib/components/src/tab/tab-bar.ts',
      textArea: './lib/components/src/textarea/textarea.ts',
      textField: './lib/components/src/textfield/textfield.ts',
      topAppBar: './lib/components/src/top-app-bar/top-app-bar.ts',
      topAppBarFixed: './lib/components/src/top-app-bar/top-app-bar-fixed.ts'
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css|\.s(c|a)ss$/,
          include: /lib\/components\/src/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'lit-scss-loader',
              options: {
                minify: true, // defaults to false
              },
            },
            { loader: 'extract-loader' },
            { loader: 'css-loader' },
            {
              loader: 'sass-loader'
            }
          ]
        },
        {
          test: /\.s(c|a)ss$/,
          include: /lib\/components\/styles/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].css',
              },
            },
            'extract-loader',
            'css-loader',
            'sass-loader',
          ]
        }
      ]
    },
    plugins: [
      new CopyPlugin({
        patterns:[
          './lib/components/package.json',
          { from: './lib/icons/covalent-icons.css', to: './icons' },
          { from: './lib/icons/covalent-icons.eot', to: './icons' },
          { from: './lib/icons/covalent-icons.svg', to: './icons' },
          { from: './lib/icons/covalent-icons.ttf', to: './icons' },
          { from: './lib/icons/covalent-icons.woff', to: './icons' },
          { from: './lib/icons/favicon.ico', to: './icons' },
        ]
      }),
    ],
  };