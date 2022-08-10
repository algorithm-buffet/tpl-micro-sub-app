const CracoAntDesignPlugin = require('craco-antd');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');


module.exports = {
  webpack: {
    plugins: {
      add: [new AntdDayjsWebpackPlugin()],
    },
    configure: (webpackConfig, { env, paths }) => {
      // add this line
      webpackConfig.output.libraryTarget = 'umd';

      webpackConfig.externals = {
        react: {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react',
        },
        'react-dom': {
          root: 'ReactDOM',
          commonjs2: 'react-dom',
          commonjs: 'react-dom',
          amd: 'react-dom',
        },
      };

      webpackConfig.output = {
        ...webpackConfig.output,
        libraryTarget: 'umd',
        library: '__name__(camelCase)',
      };

      return webpackConfig;
    },
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': '#1DA57A',
        },
      },
    },
  ],
};
