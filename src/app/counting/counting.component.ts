import { Component, Input } from '@angular/core';
@Component({
selector: 'app-count',
templateUrl: './counting.component.html',
styleUrls: ['./counting.component.css']
})

export class CountingComponent {
    @Input()
    title: string;

    constructor() {}

}