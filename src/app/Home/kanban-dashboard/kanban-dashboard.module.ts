import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanDashboardComponent } from './kanban-dashboard/kanban-dashboard.component';
import { TopbarModule } from '../../../app/components/topbar/topbar.module'
import { BoardMenuModule } from 'src/app/components/board-menu/board-menu.module';
import { CardModule } from 'src/app/components/card/card.module';
import {DragDropModule} from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [KanbanDashboardComponent],
  imports: [
    CommonModule,
    TopbarModule,
    BoardMenuModule,
    CardModule,
    DragDropModule
  ],
  exports: [KanbanDashboardComponent]
})
export class KanbanDashboardModule { }
