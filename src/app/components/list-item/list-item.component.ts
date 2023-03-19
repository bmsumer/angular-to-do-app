import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToDo } from 'src/app/models/to-do.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() toDo: ToDo = new ToDo();
  @Input() index: number = -1;
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() isDoEvent: EventEmitter<number> = new EventEmitter<number>();

  faTrash = faTrash;

  constructor() {

  }

  public clickDeleteButton(id: number) {
    this.deleteEvent.emit(id);
  }

  public changeCheckBox(id: number){
    this.isDoEvent.emit(id)
  }
}
