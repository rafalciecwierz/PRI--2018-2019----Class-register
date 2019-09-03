import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserSessionService } from './user-session.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: UserSessionService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            if(this.authService.isAuthenticated()){
                return true;
            } else {
                this.router.navigate(['']);
            }
        }
}