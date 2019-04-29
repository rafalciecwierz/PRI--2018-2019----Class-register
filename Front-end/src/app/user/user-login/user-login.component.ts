import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  signInForm: FormGroup;
  loginUser: Object;
  errorMsg: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }
  onSubmit(){
    if(this.signInForm.value.password=="sekretnehaslo"){
      this.router.navigate(['main']);
    }
    else{
      this.errorMsg = "Podałeś złe hasło!";
    }
  }

}
