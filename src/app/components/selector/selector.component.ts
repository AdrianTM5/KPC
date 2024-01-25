import { Component } from '@angular/core';

@Component({
  selector: 'selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent {
  public op: number;

  constructor(){
    this.op = 0;
  }

  es() {
    this.op = 0;
  }

  en() {
    this.op = 1;
  }
}
