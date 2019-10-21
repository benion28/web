import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benion-directives',
  templateUrl: './benion-directives.component.html',
  styleUrls: ['./benion-directives.component.css']
})
export class BenionDirectivesComponent implements OnInit {

  courses = [
    { id: 1, name: 'CMP 111'},
    { id: 2, name: 'MTH 111'},
    { id: 3, name: 'STA 111'},
    { id: 4, name: 'MTH 122'},
    { id: 5, name: 'MTH 132'}
  ];

  viewMode = 'SomethingElse';

  onAdd = () => {
    this.courses.push({ id: 6, name: 'CMP 211' });
  }

  onRemove = (course) => {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChange = (course) => {
    course.name = 'UPDATED';
  }

  constructor() { }

  ngOnInit() {
  }

}
