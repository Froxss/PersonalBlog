import { Component } from '@angular/core';
import { DatashareService } from '../../datashare.service';
@Component({
  selector: 'app-gamingcomp',
  templateUrl: './gamingcomp.component.html',
  styleUrls: ['./gamingcomp.component.css'],
})
export class GamingcompComponent {
  constructor(private dataShareService: DatashareService) {}

  gamingList: any[] = this.dataShareService.gamingList;

  ngOnInit(): void {
    this.dataShareService.separateDataByCategory();
  }
}
