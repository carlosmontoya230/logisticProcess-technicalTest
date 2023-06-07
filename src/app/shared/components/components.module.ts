import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule, Routes } from '@angular/router';

const components: any = [
  ToolbarComponent,
]
@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
  ],
  exports: [
    ...components
  ]
})
export class ComponentsModule { }
