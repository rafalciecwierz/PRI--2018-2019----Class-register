import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UserSessionService {

    token: string = null;
    role: string = null;
    username: string = null;


    constructor(private httpClient: HttpClient) { }

    getName(){
        return this.username;
    }

    getToken(){
        return this.token;
    }
    
    getRole() {
        return this.role;
    }
    isAuthenticated() {
        return this.token != null;
    }

    setSession(newToken: string, newRole: string, newUsername: string) {
        this.token = newToken;
        this.role = newRole;
        this.username = newUsername;
    }

    resetSession() {
        this.token = null;
        this.role = null;
        this.username = null;
    }


    logIn(body) {
        return this.httpClient.post('http://127.0.0.1:3000/logowanie', body)
            .pipe(
                catchError(this.handleError)
            );
    }

    //Method for error handling
    public handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            // console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
            //console.log(error.error);

        }
        // return an observable with a user-facing error message
        return throwError(error.error);
        //'Something bad happened; please try again later.'
    };
}