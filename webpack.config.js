const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: [
      './lib/components/src/index.ts',
      './lib/components/styles/vendor.scss',
      './lib/components/styles/theme/theme.scss',
    ],
    output: {
      filename: 'index.js',
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
              loader: 'sass-loader',
              options: {
                // Prefer Dart Sass
                implementation: require('sass'),
                // See https://github.com/webpack-contrib/sass-loader/issues/804
                webpackImporter: false,
                sassOptions: {
                  includePaths: ['./node_modules']
                }
              }
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
            {
              loader: 'sass-loader',
              options: {
                // Prefer Dart Sass
                implementation: require('sass'),
                sassOptions: {
                  includePaths: ['./node_modules']
                }
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new CopyPlugin([
        { from: "./lib/components/package.json", to: "./" },
        { from: "./lib/icons/covalent-icons", to: "./covalent-icons" },
        { from: "./lib/icons/teradata-icons", to: "./teradata-icons" },
      ]),
    ],
  };