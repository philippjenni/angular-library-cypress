import { Component } from '@angular/core';

@Component({
  selector: 'lib-componentlib',
  templateUrl: 'component-lib.component.html',
})
export class ComponentLibComponent {
  constructor() {}

  public showalert(): void {
    alert('Example Message');
  }
}
