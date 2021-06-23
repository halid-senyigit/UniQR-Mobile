import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginModel } from 'src/app/Models/UserLoginModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  @ViewChild('username') username;
  @ViewChild('password') password;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() { 

  }


  submit() {
    this.userService.login(new UserLoginModel(this.username.value, this.password.value)).subscribe(
      (data): any => {
        //giriş yapıldı
        console.log(data['studentNumber'])
        this.userService.setUserLocal(data['studentNumber'], data['token'], data['id'], data['fullname']);
        this.router.navigateByUrl('', { replaceUrl: true });
      },
      (error): any => {
        //giriş başarısız
      });
  }
}
