import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MatSidenavModule } from '@angular/material';



@NgModule({
  declarations: [SideMenuComponent],
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  exports: [
    SideMenuComponent
  ]
})
export class SideMenuModule { }
