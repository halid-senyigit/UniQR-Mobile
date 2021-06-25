import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyProfileModel } from '../Models/MyProfileModel';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {

  public profileData: MyProfileModel = new MyProfileModel();

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(){
    this.userService.getProfile().subscribe(
      (data: MyProfileModel) => {
        console.log(data);
        this.profileData = data;
      }
    )
  }

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('login', { replaceUrl: true });
  }


}
