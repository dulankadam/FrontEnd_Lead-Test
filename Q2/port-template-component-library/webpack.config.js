const path = require("path");

module.exports = {
  // Entry point: We will use a new entry file (index.ts) to export all components
  entry: "./src/index.ts",
  mode: "development", // Change to 'production' for production builds
  // Output configuration for a library
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: {
      name: "PortEditorLibrary", // Global variable name if used via <script>
      type: "umd", // Universal Module Definition (CJS, AMD, global)
    },
    clean: true, // Clean the output directory before emit.
  },

  // Modules (Loaders)
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
      // Note: Tailwind CSS usage means styling is mostly inline via JS.
      // If we used external CSS, we would include style-loader/css-loader here.
    ],
  },

  // Resolve extensions for imports
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },

  // Crucial for libraries: Don't bundle React or Lucide-React
  externals: {
    react: "react",
    "react-dom": "react-dom",
    "lucide-react": "lucide-react",
  },

  // Optimization is typically handled by --mode production,
  // but we can add source maps for better debugging if needed.
  devtool: "source-map",
};
