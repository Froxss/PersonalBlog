import { Component } from '@angular/core';
import { DatashareService } from '../../datashare.service';

@Component({
  selector: 'app-designcomp',
  templateUrl: './designcomp.component.html',
  styleUrls: ['./designcomp.component.css'],
})
export class DesigncompComponent {
  constructor(private dataShareService: DatashareService) {}

  designList: any[] = this.dataShareService.designList;

  ngOnInit(): void {
    this.dataShareService.separateDataByCategory();
  }
}
