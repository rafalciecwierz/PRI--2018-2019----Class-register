export class UserSessionService {

    token: string = null;
    role: string = null;
    username: string = null;

    getRole(){
        return this.role;
    }
    isAuthenticated() {
        return this.token != null;
    }

    setSession(newToken: string, newRole: string, newUsername: string){
        this.token = newToken;
        this.role  = newRole;
        this.username = newUsername;
    }

    resetSession(){
        this.token = null;
        this.role = null;
        this. username = null;
    }
}