import { defineConfig } from 'cypress';
import coverageWebpack from './cypress/coverage.webpack';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    supportFile: false,
  },

  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
      webpackConfig: coverageWebpack,
      options: {
        projectConfig: {
          root: 'projects/lib-component',
          sourceRoot: 'projects/lib-component/src',
          buildOptions: {
            outputPath: 'dist/lib-component',
            main: 'src/entrypoint-cypress.ts',
            tsConfig: 'tsconfig.lib.json',
          },
        },
      },
    },
    specPattern: '**/*.cy.ts',
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
  },
});
