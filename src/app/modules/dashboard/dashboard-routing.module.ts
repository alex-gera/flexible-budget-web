import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages';
import { DashboardResolver } from './shared';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: { resolver: DashboardResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
