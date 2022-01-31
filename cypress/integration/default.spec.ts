
describe('NgButtonComponent', () => {
    it('should click', () => {
    cy.visit('/');
      cy.get('button').click();
    });
});  