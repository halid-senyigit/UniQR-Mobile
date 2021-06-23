import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit(){
    this.userService.isAuthenticated() ? () => {} : this.router.navigateByUrl('login', { replaceUrl: true });; 
  }

}
