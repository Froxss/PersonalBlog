import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.css'],
})
export class CardGridComponent {
  constructor(private dataShareService: DatashareService) {}
  cardList: any[] = this.dataShareService.cardList;
  cgiList: any[] = this.dataShareService.cgiList;
  designList: any[] = this.dataShareService.designList;
  programmingList: any[] = this.dataShareService.programmingList;
  gamingList: any[] = this.dataShareService.gamingList;
  booksList: any[] = this.dataShareService.booksList;

  ngOnInit(): void {
    this.dataShareService.separateDataByCategory();
  }
}
