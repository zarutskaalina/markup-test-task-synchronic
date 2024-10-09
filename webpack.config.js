const path = require("path");

module.exports = {
  entry: "./src/index.js", // ваш вхідний файл
  output: {
    filename: "bundle.js", // ім'я вихідного файлу
    path: path.resolve(__dirname, "dist"), // папка для виходу
  },
  mode: "development", // або 'production'
  devServer: {
    static: {
      directory: path.join(__dirname, "src"), // тут має бути dist
    },
    compress: true,
    port: 9000,
    open: true,
  },
};
