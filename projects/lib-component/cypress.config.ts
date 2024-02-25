import { defineConfig } from 'cypress';
import coverageWebpack from 'projects/lib-component/cypress/coverage.webpack';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    supportFile: false,
  },

  component: {
    supportFile: 'projects/lib-component/cypress/support/component.ts',
    supportFolder: 'projects/lib-component/cypress/support',
    indexHtmlFile:
      'projects/lib-component/cypress/support/component-index.html',
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
            tsConfig: 'projects/lib-component/tsconfig.lib.json',
          },
        },
      },
    },
    specPattern: 'projects/lib-component/src/**/*.cy.ts',
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
  },
});
