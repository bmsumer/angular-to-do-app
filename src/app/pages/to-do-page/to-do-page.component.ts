import { Component } from '@angular/core';
import { ToDo } from 'src/app/models/to-do.model';

@Component({
  selector: 'app-to-do-page',
  templateUrl: './to-do-page.component.html',
  styleUrls: ['./to-do-page.component.scss']
})
export class ToDoPageComponent {
  public toDoList: ToDo[] = [];
  // public inputText: string = "";
  public newItem: ToDo = new ToDo();

  constructor(){
    let list = localStorage.getItem("toDoList");
    if(list){
      this.toDoList = JSON.parse(list)
    }
    else{
      this.toDoList = [];
      localStorage.setItem("toDoList", JSON.stringify([]))
    }
  }

  public changeCheckBox(id: number){
    this.toDoList[id].isDo = !this.toDoList[id].isDo;
    localStorage.setItem("toDoList", JSON.stringify(this.toDoList))
  }

  public addListItem(){
    this.toDoList.push(this.newItem)
    localStorage.setItem("toDoList", JSON.stringify(this.toDoList))
    this.newItem = new ToDo();
  }

  public deleteListItem(index: number){
    this.toDoList.splice(index, 1);
    localStorage.setItem("toDoList", JSON.stringify(this.toDoList))
  }
}
