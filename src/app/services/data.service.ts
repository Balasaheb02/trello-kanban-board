import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface data {
  name: string;
  label: string;
  task: string;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  data: BehaviorSubject<data[]> = new BehaviorSubject([])
  data$ = this.data.asObservable();

}
