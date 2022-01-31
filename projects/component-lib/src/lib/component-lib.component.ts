import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-componentlib',
  templateUrl: 'component-lib.component.html',
})
export class ComponentLibComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('Init Component');
  }
}
