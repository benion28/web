import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BenionServiceService {

  getTitle = () => {
    return 'Benion Forest Production & Products Courses';
  }

  getCourses = () => {
    return [
      'FPP 201',
      'FPP 301',
      'FPP 303',
      'FPP 305',
      'FPP 309'
    ];
  }

  constructor() { }
}
