import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
  constructor(
    private userService: UserService, 
    private router: Router,
    private alertController: AlertController
    ) {}

  ngOnInit() {}

  submit() {
    this.userService
      .login(new UserLoginModel(this.username.value, this.password.value))
      .subscribe(
        (data): any => {
          //giriş yapıldı
          console.log(data['studentNumber']);
          this.userService.setUserLocal(
            data['studentNumber'],
            data['token'],
            data['id'],
            data['fullname']
          );
          this.router.navigateByUrl('', { replaceUrl: true });
        },
        async (error) => {
          const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Error',
            subHeader: 'Login',
            message: 'You could not login, check your information.',
            buttons: ['OK'],
          });
          await alert.present();
        }
      );
  }
  register() {
    this.router.navigateByUrl('register', { replaceUrl: true });
  }
}
