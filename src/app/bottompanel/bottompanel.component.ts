import { AfterViewInit, Component, Input, DoCheck, OnInit,AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-bottompanel',
  templateUrl: './bottompanel.component.html',
  styleUrls: ['./bottompanel.component.css']
})
export class BottompanelComponent implements AfterContentInit  {

  result: string="notpresent";
 @Input() theValueEntered : string;
 computerPrediction = Math.floor(Math.random()*10)
 correct :any;
 constructor() { }

  ngAfterContentInit(): void {}
  ngDoCheck(){
  this.checkme(this.theValueEntered);}

  checkme(theValueEntered){

  if(theValueEntered){
    console.log("in oninit",this.theValueEntered);
    console.log("In Bottom Panel", this.theValueEntered)
    if(Number(this.theValueEntered)===Number(this.computerPrediction)){
      this.correct=true;
      console.log("teue ans")
      this.result="win"
    }
    else{
      console.log("false ans")
      this.result="lost"

      this.correct=false;
    }
  }}

  reload(){
    window.location.reload()
  }
  

}
