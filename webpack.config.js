module.exports = [{
    entry: [
      './src/theme/index.scss',
      './src/components/index.ts',
    ],
    output: {
      filename: 'covalent.js',
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