import { Directive, EventEmitter, Output } from '@angular/core';

@Directive()
export class LibBase {
  @Output()
  buttonClicked: EventEmitter<void> = new EventEmitter<void>();

  public showalert(): void {
    console.log('Library Example Message');
    this.buttonClicked.emit();
  }
}
