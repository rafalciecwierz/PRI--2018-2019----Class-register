import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserSessionService } from 'src/app/services/user-session.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  signInForm: FormGroup;
  loginUser: Object;
  errorMsg: string;

  constructor(
    private router: Router,
    private auth: UserSessionService
    ) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      'login': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(2)])
    });
  }
  onSubmit(){
    this.loginUser = new Object({
      'LOGIN': this.signInForm.value.login,
      'PASSWORD': this.signInForm.value.password
    });

    this.auth.logIn(this.loginUser).subscribe(
      (resp: Object) => {
        console.log(resp['token']+resp['role']+resp['username']);
        
        this.auth.setSession(resp['token'],resp['role'],resp['username']);
        this.router.navigate(['']);
      },
      (error) =>  {
        this.errorMsg = error.text;
      }
    );
    
  }

}
