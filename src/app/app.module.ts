import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KanbanDashboardModule } from './Home/kanban-dashboard/kanban-dashboard.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KanbanDashboardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
