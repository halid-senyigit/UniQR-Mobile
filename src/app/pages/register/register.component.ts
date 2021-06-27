import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserRegisterModel } from 'src/app/Models/UserRegisterModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('number') number;
  @ViewChild('password') password;
  @ViewChild('email') email;
  @ViewChild('fullname') fullname;

  constructor(
    private userService: UserService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  submit() {
    let user = new UserRegisterModel(
      this.number.value,
      this.password.value,
      this.fullname.value,
      this.email.value
    );
    console.log(user);
    this.userService.register(user).subscribe(
      (data) => {
        this.router.navigateByUrl('login', { replaceUrl: true });
      },
      async (error) => {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Error',
          subHeader: 'Register',
          message: 'You could not register, check your information.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    );
  }
}
