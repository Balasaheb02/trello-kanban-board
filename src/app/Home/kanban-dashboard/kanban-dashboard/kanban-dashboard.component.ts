import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

export interface data {
  name: string;
  label: string;
  task: string;
}

@Component({
  selector: 'app-kanban-dashboard',
  templateUrl: './kanban-dashboard.component.html',
  styleUrls: ['./kanban-dashboard.component.scss']
})
export class KanbanDashboardComponent implements OnInit {
  todo: any[] = [];
  done: any[] = [];
  development: any[] = [];
  testing: any[] = [];
  showFiller = true;

  constructor(private dataService: DataService,) { }

  ngOnInit() {
    this.dataService.data$.subscribe(
      response => {
        this.reset();
       response.forEach(element => {
        this.separationData(element)
       });
      }
    )

    // this.dataService.sidenav$.subscribe(
    //   response => {
    //     if (response == true) {
    //       drawer.toggle()
    //     }
    //   }
    // )
  }
  separationData(data) {
    if (data.task == 'todo') {
      this.todo.push(data);
    } else if (data.task == 'development') {
      this.development.push(data)
    } else if (data.task == 'testing') {
      this.testing.push(data)
    } else if (data.task == 'done') {
      this.done.push(data)
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  reset(){
    this.todo = [];
    this.done = [];
    this.development = [];
    this.testing = [];
  }

}
