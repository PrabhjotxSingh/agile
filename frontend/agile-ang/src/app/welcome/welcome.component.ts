import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  loginDisplay = true;
  childData: string = '';
  wmsg: string = '';

  constructor() {}

  ngOnInit(): void {
    this.welcomeMessage();
  }

  signupEvent(event: any) {
    this.loginDisplay = event;
  }

  welcomeMessage() {
    var numGen = Math.floor(Math.random() * 10);
    console.log(numGen);
    if (numGen == 0) {
      this.wmsg = 'Hello and welcome to';
    } else if (numGen == 1) {
      this.wmsg = 'Start your day with';
    } else if (numGen == 2) {
      this.wmsg = 'Get ready to use';
    } else if (numGen == 3) {
      this.wmsg = 'Hope you are doing well and welcome to';
    } else if (numGen == 4) {
      this.wmsg = 'Smile you are about to use';
    } else if (numGen == 5) {
      this.wmsg = 'Let us get started with';
    } else if (numGen == 6) {
      this.wmsg = 'Get ready to manage your day with';
    } else if (numGen == 7) {
      this.wmsg = 'What a wonderful day to use';
    } else if (numGen == 8) {
      this.wmsg = 'Hello and welcome to';
    } else {
      this.wmsg = 'Manage your day better with';
    }
  }
}
