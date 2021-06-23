import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FnoComponent } from './fno/fno.component';
import { DwaComponent } from './dwa/dwa.component';

const routes: Routes = [
  { path: 'forNoOne', component: FnoComponent },
  { path: 'daysWithoutAlcohol', component: DwaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
