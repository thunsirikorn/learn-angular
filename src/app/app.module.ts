import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CountingComponent } from './counting/counting.component';
import { Lab4Component } from './lab4/lab4.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopbannerComponent } from './topbanner/topbanner.component';
import { CategoryMenuComponent } from './category/categoryMenu.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TaskListComponent } from './task-list/task-list.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountingComponent,
    Lab4Component,
    NavbarComponent,
    TopbannerComponent,
    CategoryMenuComponent,
    TodolistComponent,
    TaskListComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
