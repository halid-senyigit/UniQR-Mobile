import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Global } from '../Global';
import { CourseDetailModel } from '../Models/CourseDetailModel';
import { MyCourses } from '../Models/MyCourses';

@Injectable({
  providedIn: 'root'
})
export class MyCoursesService {

  constructor(private httpClient:HttpClient) { 
    
  }

  public myCourses():Observable<MyCourses[]> {
    let token = "Bearer " + localStorage.getItem("token");
    return this.httpClient.post<MyCourses[]>(Global.baseUrl+"StudentAccount/MyCourses", {}, {headers: {"Authorization": token}});
  }

  public courseDetails(id):Observable<CourseDetailModel> {
    let token = "Bearer " + localStorage.getItem("token");
    return this.httpClient.get<CourseDetailModel>(Global.baseUrl+"StudentAccount/CourseDetails/" + id, {headers: {"Authorization": token}});
  }

}
