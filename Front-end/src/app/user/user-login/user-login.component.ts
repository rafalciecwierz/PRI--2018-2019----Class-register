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
    if(this.signInForm.value.password=="nauczyciel"){
      this.router.navigate(['main']);
      this.auth.setSession('1234','teacher','joe');
    }
    else if(this.signInForm.value.password=="rodzic"){
      this.router.navigate(['main']);
      this.auth.setSession('1234','parent','joe');
    }
    else if(this.signInForm.value.password=="sekretarka"){
      this.router.navigate(['main']);
      this.auth.setSession('1234','secretary','joe');
    }
    else if(this.signInForm.value.password=="admin"){
      this.router.navigate(['main']);
      this.auth.setSession('1234','admin','joe');
    }
    else{
      this.errorMsg = "Podałeś złe hasło!";
    }
  }

}
