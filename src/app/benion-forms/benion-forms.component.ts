import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benion-forms',
  templateUrl: './benion-forms.component.html',
  styleUrls: ['./benion-forms.component.css']
})
export class BenionFormsComponent implements OnInit {

  title = 'Benion-Web';
  isChecked = false;
  colors = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' }
  ];
  onChange($event) {
    console.log($event);
  }

  constructor() { }

  ngOnInit() {
  }

}
