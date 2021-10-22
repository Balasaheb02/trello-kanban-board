import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanDashboardComponent } from './kanban-dashboard/kanban-dashboard.component';
import { TopbarModule } from '../../../app/components/topbar/topbar.module'



@NgModule({
  declarations: [KanbanDashboardComponent],
  imports: [
    CommonModule,
    TopbarModule,
  ],
  exports: [KanbanDashboardComponent]
})
export class KanbanDashboardModule { }
