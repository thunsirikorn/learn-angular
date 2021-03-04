import { Component, OnInit, Input } from '@angular/core';
import { TodoList } from '../models/todo-list';

@Component({
selector: 'app-task-list',
templateUrl: './task-list.component.html',
styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
    @Input()
    title: string;

    constructor() {}

    todoTask: TodoList[] = [];

/*
    constructor() {
    this.todoTasks = [];
    this.todoTasks.push({
        id: 1,
        name: 'Task name',
        description: 'Description'
    });

    this.todoTasks.push({
        id: 2,
        name: 'Task name',
        description: 'Description'
    });

    this.todoTasks.push({
        id: 3,
        name: 'Task name',
        description: 'Description'
    });
}
*/

ngOnInit() {}

addTask() {
    this.todoTask.push(new TodoList());
}

removeTask(id: number) {
    if(id > -1) {
        this.todoTask.splice(id,1);
    }
}

}