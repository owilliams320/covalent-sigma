const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: [
      './lib/components/theme/index.scss',
      './lib/components/index.ts',
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
          include: /lib\/components/,
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
          include: /lib\/theme/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'covalent-theme.css',
              },
            },
            'extract-loader',
            'css-loader',
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
        }
      ]
    },
    plugins: [
      new CopyPlugin([
        { from: "./lib/components/package.json", to: "./" },
        { from: "./lib/icons/covalent-icons/*", to: "./covalent-icons" },
        { from: "./lib/icons/teradata-icons/*", to: "./teradata-icons" },
      ]),
    ],  
  };