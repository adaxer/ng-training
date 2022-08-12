import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styles: [
  ]
})
export class WelcomeComponent implements OnInit {
  title = "Willkommen bei Hello";
  userName?: string;
  isKnownUser: boolean=false;
  constructor() {
   }

  saveUser(): void {
    console.log("Username ", this.userName, " gespeichert");
    this.isKnownUser = true;
  }

  ngOnInit(): void {
  }

}
