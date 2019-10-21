import { fadeAnimation } from './../benion-fade-animations';
import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-benion-animations',
  templateUrl: './benion-animations.component.html',
  styleUrls: ['./benion-animations.component.css'],
  animations: [
    fadeAnimation
  ]
})
export class BenionAnimationsComponent implements OnInit {

  todoLists: any = [
    'Check Facebook Notifications',
    'Read News Online',
    'Play Games',
    'Do My Programmings',
    'Chat Online',
    'Midnight Browsing'
  ];

  addItems = (input: HTMLInputElement) => {
    this.todoLists.splice(0, 0, input.value);
    console.log('Item Added');
  }

  removeItems = ( item ) => {
    const index = this.todoLists.indexOf(item);
    this.todoLists.splice(index, 1);
    console.log('Item Removed');
  }

  constructor() { }

  ngOnInit() {
  }

}
