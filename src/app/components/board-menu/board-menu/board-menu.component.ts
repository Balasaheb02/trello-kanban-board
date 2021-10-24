import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { map, startWith, takeUntil, withLatestFrom, filter } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
import { AddTasksComponent } from '../../../Home/kanban-dashboard/add-tasks/add-tasks.component'


@Component({
  selector: 'app-board-menu',
  templateUrl: './board-menu.component.html',
  styleUrls: ['./board-menu.component.scss']
})
export class BoardMenuComponent implements OnInit {


  taskCtrl: FormControl;
  filteredTask: BehaviorSubject<any[]> = new BehaviorSubject([])
  filteredTask$: Observable<any[]> = this.filteredTask.asObservable();
  options = [];

  filterOptions: Observable<any[]>
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private dialog: MatDialog,
    private dataService: DataService,
    private dialogRef: MatDialogRef<AddTasksComponent>) {
    this.taskCtrl = new FormControl();
  }

  ngOnInit() {



    this.dataService.masterData$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe(
      res => {
        if (this.dataService.data.value.length != 0) {
          this.options.push(res)
          this.filteredTask.next(res);
        }
      }
    )

  }

  searchTask() {
    this.dataService.data.next(this.filterItems(this.dataService.masterData.value, this.taskCtrl.value))
    console.log(this.dataService.data)
  }

  filterItems(arr, query) {
    return arr.filter(el => el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60px";
    this.dialog.open(AddTasksComponent);
  }

  onClose() {
    this.dialogRef.close();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete
  }

}

