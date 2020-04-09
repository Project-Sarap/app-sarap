import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceComponent } from './page/maintenance/maintenance.component';
import { NotFoundComponent } from './page/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: MaintenanceComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
