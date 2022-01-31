import { startAngularDevServer } from '@jscutlery/cypress-angular';

module.exports = (on, config) => {
  require('@cypress/code-coverage/task')(on, config);
  on(
    'file:preprocessor',
    require('@cypress/code-coverage/use-browserify-istanbul')
  );

  on('dev-server:start', (options) =>
    startAngularDevServer({
      options,
      tsConfig: 'tsconfig.cypress.json',
      target: 'ComponentLib:build',
      webpackConfig: {
        module: {
          rules: [
            {
              test: /\.(ts)$/,
              use: {
                loader: 'babel-loader',
                options: {
                  plugins: ['babel-plugin-istanbul'],
                },
              },
              enforce: 'post',
              include: require('path').join(__dirname, '..', 'src'),
              exclude: [/node_modules/, /cypress/, /(ngfactory|ngstyle)\.js/],
            },
          ],
        },
      },
    })
  );
  return config;
};
