import { Component } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
})
export class MyComponent {
  public showalert(): void {
    alert('Example Message');
  }
}
