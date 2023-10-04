import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../../datashare.service';
@Component({
  selector: 'app-homecomp',
  templateUrl: './homecomp.component.html',
  styleUrls: ['./homecomp.component.css'],
})
export class HomecompComponent implements OnInit {
  constructor(private dataShareService: DatashareService) { }
  mixList: any[] = [];

  ngOnInit(): void {
    console.log('HomecompComponent ngOnInit');
    this.mixList = this.dataShareService.mixList;
    // //this.dataShareService.separateDataByCategory();
  }
}
