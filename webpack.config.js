/* eslint-disable no-undef */
import ESLintPlugin from "eslint-webpack-plugin";

export const entry = "./src/js/main.js";
export const plugins = [new ESLintPlugin()];
export const output = {
  path: __dirname,
  filename: "bundle.js",
};
export const module = {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: "swc-loader",
        options: {
          // presets: ['@babel/preset-env']
        },
      },
    },
  ],
};

//Commonjs
// const ESLintPlugin = require("eslint-webpack-plugin");

// module.exports = {
//   entry: "./src/js/main.js",
//   plugins: [new ESLintPlugin()],
//   output: {
//     path: __dirname,
//     filename: "bundle.js",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.m?js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "swc-loader",
//           options: {
//             // presets: ['@babel/preset-env']
//           },
//         },
//       },
//     ],
//   },
// };
