import { Component, OnInit, Input } from '@angular/core' ;
import { TodoList } from '../models/todo-list';

@Component({
selector: 'app-task-item' ,
templateUrl: './task-item.component.html' ,
styleUrls: ['./task-item.component.css' ]
})

export class TaskItemComponent implements OnInit {
@Input()
todoList: TodoList;

constructor() {}

ngOnInit() {}

}