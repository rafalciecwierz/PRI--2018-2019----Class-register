import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserSessionService } from './user-session.service';

@Injectable()
export class ExerciseDataService {
    constructor(private http: HttpClient, private auth: UserSessionService){}

    getSecretaryExercises() {
        let token = this.auth.getToken();
        let header = new HttpHeaders({'Content-Type': 'application/json', 'x-auth-token': `${token}`});
        return this.http.get('http://127.0.0.1:3000/plan_sekretarki', { headers: header});
    }

    getParentExercises(ide) {
      let token = this.auth.getToken();
      console.log(ide);
      let header = new HttpHeaders({'Content-Type': 'application/json', 'x-auth-token': `${token}`, 'ID': `${ide}`});
      return this.http.get('http://127.0.0.1:3000/plan_ucznia', { headers: header});
    }

    getTeacherExercises(ide) {
      let token = this.auth.getToken();
      console.log(ide);
      let header = new HttpHeaders({'Content-Type': 'application/json', 'x-auth-token': `${token}`, 'ID': `${ide}`});
      return this.http.get('http://127.0.0.1:3000/plan_nauczyciela', { headers: header });
    }

    postSecretaryExercise(el){
        let token = this.auth.getToken();
        let header = new HttpHeaders({'Content-Type': 'application/json', 'x-auth-token': `${token}`, 'dodajZajecia': `${el}`});
        return this.http.post('http://127.0.0.1:3000/zajecia', { headers: header});
    }
}
