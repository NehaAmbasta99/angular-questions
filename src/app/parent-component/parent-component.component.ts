import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.less']
})
export class ParentComponentComponent {
childColor: string = 'red';
counter=0;

increment(){
  this.counter = this.counter+5;
}
}
