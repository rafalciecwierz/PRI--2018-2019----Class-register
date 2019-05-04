import { Component, OnInit } from '@angular/core';
import { UserSessionService } from '../services/user-session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navbarOpen: boolean = false;

  constructor(
    private auth: UserSessionService,
    private router: Router) { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  getRole(){
    return this.auth.getRole();
  }

  isAuthenticated(){
    return this.auth.isAuthenticated();
  }

  onLogOut(){
    this.auth.resetSession();
    this.router.navigate(['']);
  }
}
