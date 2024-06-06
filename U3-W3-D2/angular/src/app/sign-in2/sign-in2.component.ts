import { Component, ViewChild, viewChild } from '@angular/core';
import { iUser } from '../interfaces/user';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-in2',
  templateUrl: './sign-in2.component.html',
  styleUrl: './sign-in2.component.scss',
})
export class SignIn2Component {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

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

  ngOnInit() {
    this.form = this.fb.group({
      name: this.fb.control(null, [Validators.required]),
      surname: this.fb.control(null, [Validators.required]),
      gender: this.fb.control(null, [Validators.required]),
      dateBirth: this.fb.control(null, [Validators.required]),
      biography: this.fb.control(null, [Validators.required]),
      userImage: this.fb.control(null, [Validators.required]),
      username: this.fb.control(null, [Validators.required]),
      email: this.fb.control(null, [Validators.required]),
      password: this.fb.control(null, [Validators.required]),
    });
  }

  isTouchedInvalid(fieldName: string) {
    const control = this.form.get(fieldName);
    return control?.touched && control?.invalid;
  }

  onSubmit() {
    console.log(this.form.value);
    console.log(this.user);
  }
}
