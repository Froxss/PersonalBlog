import { Component, OnDestroy, OnInit } from '@angular/core';
import { DatashareService } from '../../datashare.service';
@Component({
  selector: 'app-gamingcomp',
  templateUrl: './gamingcomp.component.html',
  styleUrls: ['./gamingcomp.component.css'],
})
export class GamingcompComponent implements OnInit, OnDestroy {
  gamingList: any[] = [];
  constructor(private dataShareService: DatashareService) { }

  ngOnInit(): void {
    console.log('GamingcompComponent ngOnInit');
    this.gamingList = this.dataShareService.gamingList;
    //this.dataShareService.separateDataByCategory();
  }

  ngOnDestroy(): void {
    console.log('GamingcompComponent destroyed');
  }
}
