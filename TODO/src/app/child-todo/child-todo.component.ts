import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child-todo',
  templateUrl: './child-todo.component.html',
  styleUrls: ['./child-todo.component.scss']
})
export class ChildTodoComponent implements OnInit {
  @Input() dataEntered:any;
  constructor() { }
  del(data:any){
    const id = this.dataEntered.indexOf(data);
    const data3=this.dataEntered.splice(id,1);
  }
  ngOnInit(): void {
  }

}
