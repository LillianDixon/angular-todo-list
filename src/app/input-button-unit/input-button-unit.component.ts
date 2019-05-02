import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: 
    `<input class="todo-input" 
      #inputElementRef
      placeholder="To do..." 
      (keyup.enter)="submitValue($event.target.value)">

    <button class="btn"
      (click)="submitValue(inputElementRef.value)">
      Save
    </button>`,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'To do...';
  @Output() submit: EventEmitter<string> = new EventEmitter();


  // the order will always go through constructor then init
  constructor() { 
  }

// for every class the implements OnInit you need to add ngOnInit(){}
// OnInit is an interface- a structure defined but not implemented as a class
  ngOnInit() {
  }

  submitValue(newTitle: string){
    this.submit.emit(newTitle);
  }

}
