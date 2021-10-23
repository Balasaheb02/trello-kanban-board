import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  showFiller = false;

  constructor(private dataService: DataService,) { }

  ngOnInit() {
  }


  closeSideNave(value: boolean) {
    this.dataService.sidenav.next(true)
  }

}
