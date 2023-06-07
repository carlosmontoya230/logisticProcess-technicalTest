import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { AppCoreRoutingModule } from './app-core-routing.module';
import { AppCoreComponent } from './app-core.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { PodUploadComponent } from './pod-upload/pod-upload.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AppCoreComponent,
    DashboardComponent,
    DeliveryDetailsComponent,
    DeliveryListComponent,
    PodUploadComponent
  ],
  imports: [
    CommonModule,
    AppCoreRoutingModule,
    SharedModule
  ]
})
export class AppCoreModule { }
