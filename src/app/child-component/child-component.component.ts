import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.less']
})
export class ChildComponentComponent implements OnChanges{
@Input() childColorFromParent! : string;
@Input() counter!:number;
childCounter:number =0;
ngOnInitFired:string = '';
ngDoCheckFired:string = '';
changeLog :string[]=[];
ngOnChanges(changes : SimpleChanges): void {
for(const prop in changes){
  let change =changes[prop];
  this.changeLog.push('ngOnChanges ' + 'currentValue ' + change.currentValue + 'change.previousValue' + change.previousValue)
}
}

ngOnInit(){
  this.ngOnInitFired ='ngOnInit() is called';
  this.changeLog.push(this.ngOnInitFired);
}

ngDoCheck(){
this.ngDoCheckFired = 'ngDoCheck() is called';
this.changeLog.push(this.ngDoCheckFired);
}
ngAfterContentChecked(){
  this.changeLog.push('ngAfterContentChecked is called');
}
ngAfterViewInit(){
  this.changeLog.push('ngAfterViewInit is called');
}
ngAfterContentInit(){
  this.changeLog.push('ngAfterContentInit is called');
}
ngAfterViewChecked(){
  this.changeLog.push('ngAfterViewChecked is called');
}
ngDestroy(){
  this.changeLog.push('ngDestroy is called');
}


multiply(){
  this.childCounter = this.childCounter * 5;
}


}
