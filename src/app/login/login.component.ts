import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private builder: FormBuilder, private service: LoginService) { }

  ngOnInit(): void {
    this.formLogin = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }

  login() {
    this.service
      .realizaLogin(this.formLogin.get('email')?.value, this.formLogin.get('senha')?.value)
      .subscribe(console.log);
  }
}
