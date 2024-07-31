import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator2',
  templateUrl: './calculator2.component.html',
  styleUrls: ['./calculator2.component.css']
})
export class Calculator2Component{

  public num1:number = 0;
  public num2:number = 0;

  public result:number = 0;

  catch(value:number){
    this.result = value;
  }

}
