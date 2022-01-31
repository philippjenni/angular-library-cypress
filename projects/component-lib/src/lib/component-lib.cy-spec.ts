import { mount } from '@jscutlery/cypress-angular/mount';
import { ComponentLibComponent } from './component-lib.component';

describe('test', () => {
  it('should have text', () => {
    mount(ComponentLibComponent);
    cy.get('div').contains('Test Component');
  });
});
