import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

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

  constructor(private fb: FormBuilder, private dataService: DataService) { }

  taskForm = this.fb.group({
    name: [''],
    task: [''],
    label: [''],
  })

  ngOnInit() {
  }

  submitForm(){
    this.dataService.data.next(this.taskForm.value)
  }

  lables: status[] = [
    {value:'cp', viewValue:'CP'},
    {value: 'fault', viewValue:'Fault'}
  ]

  statusData: status[] = [
    {value: 'todo', viewValue: 'To do'},
    {value: 'development', viewValue: 'Development'},
    {value: 'testing', viewValue: 'Testing'},
    {value: 'Done', viewValue: 'Done'}
  ];
}
