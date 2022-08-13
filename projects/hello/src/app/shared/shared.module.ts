import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import {MatIconModule} from '@angular/material/icon';
import { DecoratePipe } from './decorate.pipe';



@NgModule({
  declarations: [
    StarComponent,
    DecoratePipe
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    StarComponent,
    DecoratePipe
  ]
})
export class SharedModule { }
