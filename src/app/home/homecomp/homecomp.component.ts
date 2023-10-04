import { Component } from '@angular/core';
import { DatashareService } from '../../datashare.service';
@Component({
  selector: 'app-homecomp',
  templateUrl: './homecomp.component.html',
  styleUrls: ['./homecomp.component.css'],
})
export class HomecompComponent {
  constructor(private dataShareService: DatashareService) {}
  mixList: any[] = this.dataShareService.mixList;

  ngOnInit(): void {
    this.dataShareService.separateDataByCategory();
  }
}
