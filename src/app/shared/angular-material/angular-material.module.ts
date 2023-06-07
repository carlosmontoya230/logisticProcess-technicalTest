import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

const material: any = [
  CommonModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatTabsModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatTableModule,
  MatSortModule
]
@NgModule({
  declarations: [],
  imports: [
    ...material
  ], exports: [
    ...material
  ]
})
export class AngularMaterialModule { }
