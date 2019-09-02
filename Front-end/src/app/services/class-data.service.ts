import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserSessionService } from './user-session.service';

@Injectable()
export class ClassDataService {

    constructor(private http: HttpClient, private auth: UserSessionService){}

    getClasses(){
        let token = this.auth.getToken();
        let header = new HttpHeaders({'Content-Type': 'application/json', 'x-auth-token': `${token}`});
        return this.http.get('http://127.0.0.1:3000/klasy', { headers: header});
    }

    postClass(body){
        let token = this.auth.getToken();
        const role = this.auth.getRole();
        let header = new HttpHeaders({'Content-Type': 'application/json', 'x-auth-token': `${token}`, 'role': `${role}`});
        return this.http.post('http://127.0.0.1:3000/klasy', body, { headers: header});
    }

}