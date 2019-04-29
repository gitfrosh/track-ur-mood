exports.webpack = config =>
  Object.assign(config, {
    target: "electron-renderer"
  });

exports.exportPathMap = () => ({
  "/start": { page: "/start" }
});

// make image imports possible
module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/images/",
            outputPath: "static/images/"
            // name: '/static/[name].[ext]',
          }
        }
      ]
    });

    return config;
  }
};
