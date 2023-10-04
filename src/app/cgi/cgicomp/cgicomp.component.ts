import { Component } from '@angular/core';
import { DatashareService } from '../../datashare.service';

@Component({
  selector: 'app-cgicomp',
  templateUrl: './cgicomp.component.html',
  styleUrls: ['./cgicomp.component.css'],
})
export class CgicompComponent {
  constructor(private dataShareService: DatashareService) {}

  cgiList: any[] = this.dataShareService.cgiList;

  ngOnInit(): void {
    //this.dataShareService.separateDataByCategory();
  }
}
