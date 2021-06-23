export class UserRegisterModel{
    constructor(number?, password?, fullname?, email?) {
        this.Number = number;
        this.Password = password;
        this.Email = email;
        this.Fullname = fullname;
    }
    
    Number: string;
    Password: string;
    Email: string;
    Fullname: string;
}