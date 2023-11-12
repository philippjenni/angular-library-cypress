# Setup

## Add Cypress Coverage

### Install the required schema

> It's required that all projects (main and libraries) are created before you add coverage. The current schema doesn't support
> Adding coverage to a single project when the command is already being executed!

Adding Cypress Schematic to Setup Coverage

```
ng add @cypress/schematic --e2e --component
```

### Add instrumentation

Install cypress code coverage project.

```
npm install -D @cypress/code-coverage
```

Add a file `coverage.webpack.ts` to each cypress folder (in main and each library project).

```
export default {
    module: {
      rules: [
        {
          test: /\.(ts)$/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: ['babel-plugin-istanbul']
            }
          },
          enforce: 'post',
          include: require('path').join(__dirname, '..', 'src'),
          exclude: [
            /node_modules/,
            /cypress/,
            /(ngfactory|ngstyle)\.js/]
        },
      ],
    },
  };
```

In our example we don't have cypress tests in library lib-base. So we don't need the file there.

Add `node` types to cypress project. Extend types array in `config.ts` in each cypress folder.

```
"types": ["cypress","node"]
```

Edit `cypress.config.ts` in main project and in the library project. Be aware that the config from main is different to the library project.

The `cypress.config.ts` in the main projects requires following extensions.

- webpack

  ```
  import coverageWebpack from './cypress/coverage.webpack';

  export default defineConfig({
    component: {
        devServer: {
        webpackConfig: coverageWebpack,
        },
    },
  });
  ```

- Coverage Task

  ```
  export default defineConfig({
    component: {
        setupNodeEvents(on, config) {
        require('@cypress/code-coverage/task')(on, config);
        return config;
        },
    },
  });
  ```

- Change the path of `specPattern` to value `src/**/*.cy.ts` to exclude all tests in libraries in main project

Edit `cypress.config.ts` in each library project which have cypress tests.

- webpack

  ```
  import coverageWebpack from './cypress/coverage.webpack';

  export default defineConfig({
    component: {
        devServer: {
        webpackConfig: coverageWebpack,
        },
    },
  });
  ```

- Coverage Task

  ```
  export default defineConfig({
    component: {
        setupNodeEvents(on, config) {
        require('@cypress/code-coverage/task')(on, config);
        return config;
        },
    },
  });
  ```

- Build parameters for library project

  ```
  export default defineConfig({
  component: {
      devServer: {
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
  });
  ```

Now you have added coverage to the component tests. Add `import '@cypress/code-coverage/support'` to each `cypress/support/component.ts` of the main and each library project.



### Instrument sub library

Cypress can't instrument the base library of our project. So we need to instrument the code before we run the tests on the library project.

To instrument the code we use the following command.

```
npx nyc instrument ./dist/lib-base --in-place
```

This does an in-place replacement of the code. Do not release this code! If you want to make an npm release, you will have to rebuild the project.

## Create test commands.

Create a command to run tests in `package.json`

```
"cypress-lib-run": "npm run build-lib-base && npm run instrument-lib-base && npx cypress run --component --project projects/lib-component --env coverage=true"
```

The first step builds the base library. The second step creates the instrumentation code and the third step runs the Cypress tests.