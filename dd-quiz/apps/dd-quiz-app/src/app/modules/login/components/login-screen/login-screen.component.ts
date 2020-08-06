import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { userService } from '../../service/user.service';
import { User } from '@dd/core/database/entity/User';
import { async } from '@angular/core/testing';

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

  users: User[] = [];

  constructor(private _userService: userService) {
    this.getUsers();
  }

  ngOnInit(): void {}

  getUsers() {
    this._userService.connection
      .then(() => User.find())
      .then((users) => {
        this.users = users;
      });
  }

  addUsers() {
    console.log('Inserting a new user into the database...');
    const userArray = [
      {
        username: 'Dave@test',
        password: 'password123',
        level: 'full',
      },
      {
        username: 'Joel@test',
        password: 'SummerTime64',
        level: 'full',
      },
      {
        username: 'Kat@reduced',
        password: 'Qwerty9009',
        level: 'reduced',
      },
      {
        username: 'Ben@reduced',
        password: 'JuniperB3rri3s',
        level: 'reduced',
      },
      {
        username: 'Tom@restrict',
        password: '1234DDFhLm',
        level: 'restricted',
      },
      {
        username: 'Ann@restrict',
        password: 'SomeRand0mPassw0rd',
        level: 'restricted',
      },
    ];

    userArray.forEach(async (user) => {
      let databaseUser = new User();
      databaseUser.userName = user.username;
      databaseUser.password = user.password;
      databaseUser.level = user.level;

      this._userService.connection
        .then(() => {
          databaseUser.save();
          console.log('Saved a user with id: ', databaseUser.id);
        })
        .then(() => {
          console.log('Loading users from the database...');
          this.getUsers();
        });
    });
  }

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
