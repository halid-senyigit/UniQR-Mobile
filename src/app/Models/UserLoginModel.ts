export class UserLoginModel{
    constructor(username?, password?) {
        this.Username = username;
        this.Password = password;
    }
    
    Username: string;
    Password: string;
}