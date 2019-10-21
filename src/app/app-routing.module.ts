import { BenionFirebaseComponent } from './benion-firebase/benion-firebase.component';
import { FormComponent } from './form/form.component';
import { BenionPageNotFoundComponent } from './benion-page-not-found/benion-page-not-found.component';
import { BenionAnimationsComponent } from './benion-animations/benion-animations.component';
import { BenionFormComponent } from './benion-form/benion-form.component';
import { BenionFormsComponent } from './benion-forms/benion-forms.component';
import { BenionDirectivesComponent } from './benion-directives/benion-directives.component';
import { BenionCoursesComponent } from './benion-courses/benion-courses.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BenionFormsComponent,
    data: { title: 'Benion Homepage'}
  },
  {
    path: 'form',
    component: BenionFormComponent,
    data: { title: 'Benion Form'}
  },
  {
    path: 'directives',
    component: BenionDirectivesComponent,
    data: { title: 'Benion Directives'}
  },
  {
    path: 'forms',
    component: BenionFormsComponent,
    data: { title: 'Benion Forms'}
  },
  // {
  //   path: 'page-not-found',
  //   loadChildren: './benion-page-not-found/benion-page-not-found.module#BenionPageNotFoundModule'
  // },
  // {
  //   path: '**',
  //   redirectTo: 'page-not-found'
  // },
  {
    path: 'courses',
    component: BenionCoursesComponent,
    data: { title: 'Benion Courses'}
  },
  {
    path: 'animations',
    component: BenionAnimationsComponent,
    data: { title: 'Benion Animations'}
  },
  {
    path: 'test',
    component: FormComponent,
    data: { title: 'Benion Test'}
  },
  {
    path: 'firebase',
    component: BenionFirebaseComponent,
    data: { title: 'Benion FireBase'}
  },
  {
    path: 'page-not-found',
    component: BenionPageNotFoundComponent,
    data: { title: 'Benion Page Not Found'}
  },
  {
    path: '**',
    redirectTo: '/page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true } // Debubbgbging Purpose Only
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
