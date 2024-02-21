module.exports = {
  presets: [
    "@babel/preset-react",
    ["@babel/preset-typescript"],
    [
      "@babel/preset-env",
      {
        targets: {
          chrome: 30,
          ie: "9",
        },
        modules: false,
        useBuiltIns: "usage",
        corejs: 2,
      },
    ],
  ],
  plugins: ["@babel/plugin-transform-runtime"],
};
