import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  inputType:string = "color";
  variable:string = "coucou";

  public printConsole(event : Event) : void {
      console.log(event);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
