import { ComponentLibComponent } from './component-lib.component';

describe('NgButtonComponent', () => {
  it('should click', () => {
    const onShowAlertSpy = cy.spy().as('onShowAlertSpy');
    cy.mount(ComponentLibComponent, {
      componentProperties: {
        showalert: onShowAlertSpy,
      },
    });

    cy.get('button').click();
    cy.get('@onShowAlertSpy').should('be.calledOnce');
  });
});
