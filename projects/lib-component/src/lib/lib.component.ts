import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lib-libcomponent',
  templateUrl: './lib.component.html',
})
export class LibComponent {
  @Output()
  buttonClicked: EventEmitter<void> = new EventEmitter<void>();

  public showalert(): void {
    console.log('Library Example Message');
    this.buttonClicked.emit();
  }
}
