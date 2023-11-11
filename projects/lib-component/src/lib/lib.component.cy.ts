import { createOutputSpy } from 'cypress/angular';
import { MyComponent } from './my.component';

describe('NgButtonComponent', () => {
  it('should click', () => {
    cy.mount(MyComponent, {
      componentProperties: {
        buttonClicked: createOutputSpy('buttonClicked'),
      },
    });

    cy.get('button').click();
    cy.get('@buttonClicked').should('be.calledOnce');
  });
});
