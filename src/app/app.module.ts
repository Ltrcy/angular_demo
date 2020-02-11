import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { SearchComponent } from './components/search/search.component';
// import { FormComponent } from './components/form/form.component';

// 引入表单相关的模块，才可以用双向数据绑定
import { FormsModule } from '@angular/forms';
import { TodolistComponent } from './components/todolist/todolist.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    // SearchComponent
    // FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
