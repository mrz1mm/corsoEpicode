import { Component } from '@angular/core';
import { iUser } from '../interfaces/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  user: iUser = {
    name: '',
    surname: '',
    gender: '',
    dateBirth: undefined,
    biography: '',
    userImage: '',
    username: '',
    email: '',
    password: '',
  };

  onSubmit() {
    console.log(this.user);
  }
}
