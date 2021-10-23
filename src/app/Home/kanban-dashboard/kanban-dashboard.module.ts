import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanDashboardComponent } from './kanban-dashboard/kanban-dashboard.component';
import { TopbarModule } from '../../../app/components/topbar/topbar.module'
import { BoardMenuModule } from 'src/app/components/board-menu/board-menu.module';
import { CardModule } from 'src/app/components/card/card.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MatDialogRef } from '@angular/material';
import { SideMenuModule } from 'src/app/components/side-menu/side-menu.module';

import { MatSidenavModule } from '@angular/material';


@NgModule({
  declarations: [KanbanDashboardComponent],
  imports: [
    CommonModule,
    TopbarModule,
    BoardMenuModule,
    CardModule,
    DragDropModule,
    SideMenuModule,
    MatSidenavModule
  ],
  exports: [KanbanDashboardComponent],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
 ],
})
export class KanbanDashboardModule { }
