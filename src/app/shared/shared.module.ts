import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ComponentsModule
  ],
  exports: [
    AngularMaterialModule,
    ComponentsModule
  ]
})
export class SharedModule { }
