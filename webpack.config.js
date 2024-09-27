const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        library: "jsonToTableLib",
        libraryTarget: "umd", // UMD形式でエクスポート
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"], // CSSを読み込む
            },
        ],
    },
    mode: "production", // 本番用モード
};
