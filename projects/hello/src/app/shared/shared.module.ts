import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    StarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    StarComponent
  ]
})
export class SharedModule { }
