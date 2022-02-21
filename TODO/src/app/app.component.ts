import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TODO';
  todo:any;
  recievData(event:any) {
    // console.log(event);
    this.todo=event;
   }
}
