import { Component, OnInit } from '@angular/core';
import { JitEvaluator } from '@angular/compiler';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses=[
    {
      id:1,
      title:'java',
      instructor:'Ahmed',
      isAvailabel:true

    },
    {
      id:2,
      title:'javascript',
      instructor:'mahmoud',
      isAvailabel:false

    },
    {
      id:3,
      title:'mongo',
      instructor:'Amr',
      isAvailabel:true

    },
    {
      id:4,
      title:'python',
      instructor:'Ali',
      isAvailabel:true

    },
  ];
  clickedCourseTitle;

  constructor(private coursesService:CoursesService) { }

  ngOnInit(): void {
  }
  onCourseClick(ev){
    
    this.clickedCourseTitle = ev;
  }
  onCourseItemClick(course){
    this.coursesService.changeCourseData(course);
  }

}
