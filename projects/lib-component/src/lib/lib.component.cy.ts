import { createOutputSpy } from 'cypress/angular';
import { LibComponent } from './lib.component';

describe('NgLibComponent', () => {
  it('should click', () => {
    cy.mount(LibComponent, {
      componentProperties: {
        buttonClicked: createOutputSpy('buttonClicked'),
      },
    });

    cy.get('button').click();
    cy.get('@buttonClicked').should('be.calledOnce');
  });
});
