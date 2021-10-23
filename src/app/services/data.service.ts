import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  data: BehaviorSubject<any> = new BehaviorSubject( [])
  data$ = this.data.asObservable();

  masterData: BehaviorSubject<any> = new BehaviorSubject([])
  masterData$ = this.masterData.asObservable();

  sidenav: BehaviorSubject<Boolean> = new BehaviorSubject(false)
  sidenav$ = this.sidenav.asObservable();


}
