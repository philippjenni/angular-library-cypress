# Start Cypress

## Main Project

`npm run cypress-project-edit`

## Library Project

`npm run cypress-lib-edit`

# Run Tests

## Test Coverage Project Component Test

Start Cypress

`npm run cypress-project-run`

## Test Coverage Component Lib

Start Cypress

`npm run cypress-lib-run`

# Setup Instructions

See how project is configure in [instructions.md](instructions.md) 

# Known Issues

* Coverage does not work if the name cypress is present in the path. Check out the project in the `angular-library-cy` folder (https://github.com/cypress-io/code-coverage/issues/726).
* Error Message `ERROR in error TS2688: Cannot find type definition file for 'cypress'.` when running Library tests. But Coverage and Test works fine. Must be an confiuration issue.


# References

* https://sabitharadhakrishnan.com/angular-code-coverage-with-cypress-component-testing/
* https://github.com/cypress-io/cypress/issues/23677
