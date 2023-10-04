import { Component } from '@angular/core';
import { DatashareService } from '../../datashare.service';
@Component({
  selector: 'app-programmingcomp',
  templateUrl: './programmingcomp.component.html',
  styleUrls: ['./programmingcomp.component.css'],
})
export class ProgrammingcompComponent {
  constructor(private dataShareService: DatashareService) {}
  programmingList: any[] = this.dataShareService.programmingList;

  ngOnInit(): void {
    this.dataShareService.separateDataByCategory();
  }
}
