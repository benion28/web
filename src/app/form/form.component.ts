import { Component, Inject, OnInit, Optional, PLATFORM_ID } from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {RESPONSE} from '@nguniversal/express-engine/tokens';
import {Response} from 'express';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
