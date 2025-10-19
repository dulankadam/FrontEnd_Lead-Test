const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  mode: "development", 
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: {
      name: "PortEditorLibrary", // Global variable name if used via <script>
      type: "umd", // Universal Module Definition (CJS, AMD, global)
    },
    clean: true, // Clean the output directory before emit.
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
     
    ],
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
    "lucide-react": "lucide-react",
  },

  devtool: "source-map",
};
