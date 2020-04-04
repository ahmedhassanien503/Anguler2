import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
   course;
  constructor( private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.coursesService.courseSubjectObservable.subscribe(data=>{
     this.course=data;
    })
  }

}
