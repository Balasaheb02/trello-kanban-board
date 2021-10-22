import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardMenuComponent } from './board-menu/board-menu.component';



@NgModule({
  declarations: [BoardMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [BoardMenuComponent]
})
export class BoardMenuModule { }
