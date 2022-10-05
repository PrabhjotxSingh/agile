import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Output()
  formEmit: EventEmitter<any> = new EventEmitter();

  loginDisplay: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  switchToSignup() {
    this.formEmit.emit(false);
  }
}
