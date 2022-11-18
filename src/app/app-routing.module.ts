import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { OpenCloseComponent } from './open-close/open-close.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent,
  //   data: { animation: 'filterPage' }
  // },
  {
    path: 'udemy',
    component: GoalComponent,
    data: { animation: 'goalPage' }
  },
  {
    path: 'open-close',
    component: OpenCloseComponent,
    data: { animation: 'openClosePage' }
  },
  {
    path: 'home',
    component: AppComponent,
    data: { animation: 'HomePage' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
