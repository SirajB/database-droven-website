import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'dd-quiz-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
})
export class LoginScreenComponent implements OnInit {
  @ViewChild('username', { static: false }) usernameElem: ElementRef;
  @ViewChild('password', { static: false }) passwordElem: ElementRef;

  usernameValue = '';
  passwordValue = '';

  constructor() {}

  ngOnInit(): void {}

  onLogin() {
    console.log(
      `Logged in with ${this.usernameValue} and ${this.passwordValue}`
    );
  }

  updateUsername(value: string) {
    this.usernameValue = value;
    console.log('VALUE: ', this.usernameValue);
  }
  updatePassword(value: string) {
    this.passwordValue = value;
    console.log('VALUE: ', this.passwordValue);
  }
}
