import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toppanel',
  templateUrl: './toppanel.component.html',
  styleUrls: ['./toppanel.component.css']
})
export class ToppanelComponent implements OnInit {


  // enteredValue : string;

  @Output() value = new EventEmitter<string>(); 
  constructor() { }

  ngOnInit(): void {
  }

  onClick(enteredValue){
   console.log(enteredValue.value);
   this.value.emit(enteredValue.value)

  }
}
