import { createOutputSpy } from 'cypress/angular';
import { MyComponent } from './my.component';

describe('NgButtonComponent', () => {
  it('should click', () => {
    const onClickSpy = cy.spy().as('onClickSpy');
    cy.mount(MyComponent, {
      componentProperties: {
        showalert: onClickSpy,
      },
    });

    cy.get('button').click();
    cy.get('@onClickSpy').should('be.calledOnce');
  });
});
