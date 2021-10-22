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

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.data$.subscribe(
      response => { this.todo.push(response) }
    )

  }

  todo: any[] = [
    { name: 'Get to work', label: 'cp', task: 'development' },
    { name: 'Pick up groceries', label: 'cp', task: 'development' },
    { name: 'Go home', label: 'cp', task: 'development' },
    { name: 'Fall asleep', label: 'fault', task: 'development' },
  ];

  done = [
    { name: 'Get to work 1', label: 'cp', task: 'development' },
    { name: 'Pick up groceries 2', label: 'cp', task: 'development' },
    { name: 'Go home 3', label: 'cp', task: 'development' },
    { name: 'Fall asleep 4', label: 'fault', task: 'development' },
  ];

  development = [{ name: 'Get to work 5', label: 'cp', task: 'development' },
  { name: 'Pick up groceries 4', label: 'cp', task: 'development' },
  { name: 'Go home' , label: 'cp', task: 'development' },
  { name: 'Fall asleep', label: 'fault', task: 'development' },];

  testing = [{ name: 'Get to work', label: 'cp', task: 'development' },
  { name: 'Pick up groceries', label: 'cp', task: 'development' },
  { name: 'Go home', label: 'cp', task: 'development' },
  { name: 'Fall asleep', label: 'fault', task: 'development' },];

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

}
