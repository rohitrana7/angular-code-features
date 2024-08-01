import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { SubjectComponent } from './subject/subject.component';
import { OperatorsComponent } from './operators/operators.component';

const routes: Routes = [
  { 
    path: 'obs', component: ObservableComponent
  },
  {path: 'sub', component: SubjectComponent},
  {path: 'operators', component: OperatorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
