import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserSessionService } from './user-session.service';

@Injectable()
export class MessageDataService {

    constructor(private http: HttpClient, private auth: UserSessionService){}

    getMessages(){
        let token = this.auth.getToken();
        let id = this.auth.getUserId;
        let header = new HttpHeaders({'Content-Type': 'application/json', 'x-auth-token': `${token}`, 'ID_NADAWCY': `${id}`});
        return this.http.get('http://127.0.0.1:3000/wiadomosci', { headers: header});
    }

    // postClass(body){
    //     let token = this.auth.getToken();
    //     const role = this.auth.getRole();
    //     let header = new HttpHeaders({'Content-Type': 'application/json', 'x-auth-token': `${token}`, 'role': `${role}`});
    //     return this.http.post('http://127.0.0.1:3000/klasy', body, { headers: header});
    // }

}