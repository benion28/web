import { BenionServiceService } from './../benion-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benion-courses',
    template: `
      <h2>{{ title }}</h2>
      <ul>
        <li *ngFor = "let course of mscCourses">
          {{ course }}
        </li>
      </ul>
      <p></p>
      <h2>{{ label }}</h2>
      <ul>
        <li *ngFor = "let course of fppCourses">
          {{ course }}
        </li>
      </ul>
    `
  ,
  styleUrls: ['./benion-courses.component.css']
})
export class BenionCoursesComponent implements OnInit {

  title = 'Benion Maths, Computer & Statistics Courses';

  label;

  fppCourses;

  mscCourses = [
    'CMP 111',
    'MTH 111',
    'STA 111',
    'MTH 122',
    'MTH 132',
    'CMP 211'
  ];

  constructor( service: BenionServiceService ) {
    this.label = service.getTitle();
    this.fppCourses = service.getCourses();
   }

  ngOnInit() {
  }

}
