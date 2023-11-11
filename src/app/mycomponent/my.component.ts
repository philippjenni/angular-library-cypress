import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
})
export class MyComponent {
  @Output()
  buttonClicked: EventEmitter<void> = new EventEmitter<void>();

  public showalert(): void {
    console.log('Example Message');
    this.buttonClicked.emit();
  }
}
