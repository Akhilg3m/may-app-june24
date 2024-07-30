import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() public ac:string = "xxxxx";

  public bc:string = ""; 

  // EVENT CREATE
  @Output() public bEvent:EventEmitter<any> =  new EventEmitter();
  send(){
    // EVENT EMIT
    this.bEvent.emit(this.bc);
  }

}
