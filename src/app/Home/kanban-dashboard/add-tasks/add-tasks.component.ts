import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { DataService } from 'src/app/services/data.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'

export interface status {
  value: string;
  viewValue: string;
}

export interface data {
  name: string;
  label: string;
  task: string;
}

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.scss']
})
export class AddTasksComponent implements OnInit {

  lables: status[] = [
    { value: 'cp', viewValue: 'CP' },
    { value: 'fault', viewValue: 'Fault' }
  ]

  statusData: status[] = [
    { value: 'todo', viewValue: 'To do' },
    { value: 'development', viewValue: 'Development' },
    { value: 'testing', viewValue: 'Testing' },
    { value: 'done', viewValue: 'Done' }
  ];

  constructor(private fb: FormBuilder, private dataService: DataService, private dialogRef: MatDialogRef<AddTasksComponent>) { }

  taskForm = this.fb.group({
    name: [''],
    task: [''],
    label: [''],
  })

  ngOnInit() {
  }

  submitForm() {
    const currentValue =this.dataService.data.value;
    const updatedValue = [...currentValue, this.taskForm.value];
    this.dataService.data.next(updatedValue);
    this.dataService.masterData.next(updatedValue);
    this.dialogRef.close();
  }
  onClose() {
    this.dialogRef.close();
  }
}
