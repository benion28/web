import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benion-form',
  templateUrl: './benion-form.component.html',
  styleUrls: ['./benion-form.component.css']
})
export class BenionFormComponent implements OnInit {

  getName(x) {
    console.log(x);
  }

  getComment(x) {
    console.log(x);
  }

  constructor() { }

  ngOnInit() {
  }

}
