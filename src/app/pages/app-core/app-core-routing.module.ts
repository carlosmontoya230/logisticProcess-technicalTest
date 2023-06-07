import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCoreComponent } from './app-core.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { PodUploadComponent } from './pod-upload/pod-upload.component';

const routes: Routes = [
  {
    path: '',
    component: AppCoreComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'delivery-details', component: DeliveryDetailsComponent },
      { path: 'delivery-list', component: DeliveryListComponent },
      { path: 'pod-upload', component: PodUploadComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'dashboard' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppCoreRoutingModule { }
