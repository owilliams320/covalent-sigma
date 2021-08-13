module.exports = [{
    watch: true,
    entry: ['./src/theme/index.scss'],
    output: {
      filename: 'covalent.css',
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'bundle.css',
              },
            },
            { loader: 'extract-loader' },
            { loader: 'css-loader' },
            {
              loader: 'sass-loader',
              options: {
                includePaths: ['./node_modules'],
                // Prefer Dart Sass
                implementation: require('sass'),

                // See https://github.com/webpack-contrib/sass-loader/issues/804
                webpackImporter: false,
              }
            }
          ]
        }
      ]
    },
  }];