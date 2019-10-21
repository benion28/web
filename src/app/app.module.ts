import { BenionPageNotFoundModule } from './benion-page-not-found/benion-page-not-found.module';
import { BenionServiceService } from './benion-service.service';
import { BenionCoursesComponent } from './benion-courses/benion-courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatInputModule,
  MatDatepickerModule,
  MatMenuModule,
  MatNativeDateModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireModule} from 'angularfire2';
import { BenionDirectivesComponent } from './benion-directives/benion-directives.component';
import { BenionFormsComponent } from './benion-forms/benion-forms.component';
import { FormComponent } from './form/form.component';
import { BenionFormComponent } from './benion-form/benion-form.component';
import { BenionAnimationsComponent } from './benion-animations/benion-animations.component';
import { BenionPageNotFoundComponent } from './benion-page-not-found/benion-page-not-found.component';
import { BenionFirebaseComponent } from './benion-firebase/benion-firebase.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    BenionCoursesComponent,
    BenionDirectivesComponent,
    BenionFormsComponent,
    FormComponent,
    BenionFormComponent,
    BenionAnimationsComponent,
    BenionPageNotFoundComponent,
    BenionFirebaseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    BenionPageNotFoundModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule
  ],
  providers: [
    BenionServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
