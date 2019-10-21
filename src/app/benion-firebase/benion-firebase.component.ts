import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-benion-firebase',
  templateUrl: './benion-firebase.component.html',
  styleUrls: ['./benion-firebase.component.css']
})
export class BenionFirebaseComponent implements OnInit {
  users: any[];
  constructor(database: AngularFireDatabase) {
    database.list('/users').snapshotChanges().subscribe(users => {
      this.users = users;
      console.log(this.users);
    });
  }

  ngOnInit() {}
}
