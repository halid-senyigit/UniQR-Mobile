import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseDetailModel } from 'src/app/Models/CourseDetailModel';
import { MyCoursesService } from 'src/app/services/my-courses.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private myCoursesService: MyCoursesService
    ) {}

  id = null;
  course: CourseDetailModel = new CourseDetailModel();
  loading = true;

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      //req serv res view
      this.myCoursesService.courseDetails(this.id).subscribe(data => {
        this.course = data;
        this.loading = false;
      })
    });
  }

  courses() {
    this.router.navigateByUrl('tabs/tab1', { replaceUrl: true });
  }
  download(path) {
    console.log('Dosya indirildi.');
  }
}
