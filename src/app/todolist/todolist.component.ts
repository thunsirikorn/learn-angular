import { Component, Input } from '@angular/core';

@Component({
selector: 'app-todolist',
templateUrl: './todolist.component.html',
styleUrls: ['./todolist.component.css']
})

export class TodolistComponent {
    @Input()
    title: string;

    tasks = ['Cofee', 'Breakfast'];

    constructor() {
    }

    addTask(newTask: string) {
        if (newTask) {
            this.tasks.push(newTask);
        }
    }
    

    deleteTask() {
        this.tasks;
    }
}
