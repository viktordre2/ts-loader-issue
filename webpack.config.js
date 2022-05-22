const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: ["./main.vue"],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        use: [
          {
            loader: "babel-loader",
          },

          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              appendTsSuffixTo: ["\\.vue$"],
              happyPackMode: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
