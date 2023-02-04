import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  @Output() formEmit: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  switchToLogin() {
    this.formEmit.emit(true);
  }
}
