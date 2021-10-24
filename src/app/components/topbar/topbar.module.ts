import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [TopbarComponent],
  imports: [
    CommonModule,
    MatMenuModule
  ],
  exports: [TopbarComponent],
})
export class TopbarModule { }
