import { Component } from '@angular/core';
import { MyCourses } from '../Models/MyCourses';
import { MyCoursesService } from '../services/my-courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(
    private myCoursesService: MyCoursesService,
    private router: Router
  ) { }
  loading = true;
  myCourses: MyCourses[];

  ngOnInit() {
    this.myCoursesService.myCourses().subscribe((data) => {
      this.myCourses = data;
      this.loading = false;
    });
  }

  openDetails(courseId) {
    this.router.navigate(['details/' + courseId]);
  }
}
