import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {
  constructor() { }
  @Output() dataEntered = new EventEmitter<any>();
  values:string[]=[];
  sendData(val:any) {
    this.values.push(val);
    this.dataEntered.emit(this.values)}
  ngOnInit(): void {
  }

}
