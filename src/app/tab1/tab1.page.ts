import { Component } from '@angular/core';
import { MyCourses } from '../Models/MyCourses';
import { MyCoursesService } from '../services/my-courses.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private myCoursesService: MyCoursesService) {}

  myCourses: MyCourses[];

  ngOnInit(){
    this.myCoursesService.myCourses().subscribe(
      data => {
        this.myCourses = data;
        console.log(data);
      }
    );
  }


  openDetails(courseId){
    console.log(courseId);
  }

}
