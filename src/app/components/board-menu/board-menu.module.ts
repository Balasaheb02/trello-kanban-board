import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardMenuComponent } from './board-menu/board-menu.component';
import { MatAutocompleteModule, MatFormFieldModule } from '@angular/material';
import {  MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BoardMenuComponent],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [BoardMenuComponent]
})
export class BoardMenuModule { }
