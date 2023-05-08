module.exports = ({ config }) => ({
    ...config,
    module: {
      ...config.module,
      rules: [
        {
          test: /\.jsx?$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                sourceType: 'unambiguous',
                babelrc: false,
                presets: ['react-app']
              }
            }
          ]
        },
        {
          test: /\.mdx?$/,
          use: ['babel-loader', '@mdx-js/loader']
        },
        {
          test: /\.(css|scss)$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: true,
                modules: {
                  localIdentName: '[name]-[local]-[hash:base64:3]'
                }
              }
            },
            'sass-loader'
          ]
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
          loader: 'url-loader'
        }
      ]
    }
  });