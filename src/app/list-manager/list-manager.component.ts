// Parent Component
import { Component, OnInit } from '@angular/core';
import {TodoItem} from '../interfaces/todo-item';
import {TodoListService} from '../services/todo-list.service';



@Component({
  selector: 'app-list-manager',

  // inline template
  template: 
    `
    <div class="todo-app">
    <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>
    
    <ul>
      <li *ngFor='let todoItem of todoList'>
        <app-todo-item 
          [item]="todoItem"
          (remove)='removeItem($event)'
          (update)='updateItem($event.item, $event.changes)'
        ></app-todo-item>
        <!-- the item in the [] is the same as declared as the component's @Input -->
      </li>
    </ul>
    </div>
    `,

  styleUrls: ['./list-manager.component.css']
})

// class = the controller
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[];

  constructor(private todoListService:TodoListService) { }

  ngOnInit(){
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string) {
    this.todoListService.addItem({ title });
  }

  removeItem(item){
    this.todoListService.deleteItem(item);
  }

  updateItem(item, changes){
    this.todoListService.updateItem(item, changes);
  }
  
}

// create a new component
  // in command prompt type ng g c input-button-unit
