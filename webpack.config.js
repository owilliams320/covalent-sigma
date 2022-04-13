const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: [
      './lib/theme/index.scss',
      './lib/components/index.ts',
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
                includePaths: ['./node_modules'],
                // Prefer Dart Sass
                implementation: require('sass'),
                // See https://github.com/webpack-contrib/sass-loader/issues/804
                webpackImporter: false,
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
    plugins: [
      new CopyPlugin([
        { from: "./lib/icons/covalent-icons", to: "./covalent-icons" },
        { from: "./lib/icons/teradata-icons", to: "./teradata-icons" },
      ]),
    ],  
  };