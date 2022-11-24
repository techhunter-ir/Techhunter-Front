/** @type {import('next').NextConfig} */

const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  modifyVars: { "@primary-color": "#F70776" }, // optional
  lessVarsFilePath: "./src/styles/variables.less", // optional
  lessVarsFilePathAppendToEndOfContent: false, // optional
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {
    // ...
    mode: "local",
    // localIdentName: __DEV__ ? "[local]--[hash:base64:4]" : "[hash:base64:8]", // invalid! for Unify getLocalIdent (Next.js / CRA), Cannot set it, but you can rewritten getLocalIdentFn
    exportLocalsConvention: "camelCase",
    exportOnlyLocals: false,
    // ...
    getLocalIdent: (context, localIdentName, localName, options) => {
      return "whatever_random_class_name";
    },
  },

  // for Next.js ONLY
  nextjs: {
    localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
  },

  reactStrictMode: false,
  swcMinify: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
      {
        test: /\.(sass|less|css)$/,
        loaders: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },

  // Other Config Here...

  webpack(config) {
    return config;
  },
});
