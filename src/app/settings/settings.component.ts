import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Settings } from '../_models/settings';
import { SettingService } from '../_service/setting.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settingData: Settings[];
  order: string = 'Id';
  reverse: boolean = false;
  userFilter: any;
  textFilter: string;
  totalItems: number;

  pagingConfig: any;

  constructor(private settingService: SettingService) {

    this.pagingConfig = {
      itemsPerPage: 7,
      currentPage: 1,
      totalItems: this.totalItems
    };
  }

  ngOnInit() {
    this.getSettingData();
  }

  getSettingData(){
    this.settingService.getSettingData().subscribe(data => {
      this.settingData = data;
      this.totalItems = this.settingData.length;
    });
  }
  onTableDataChange(event){
    this.pagingConfig.currentPage = event;
    this.getSettingData();
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }

  applyFilter(){
    this.userFilter = {
        $or : [
            { Id : this.textFilter },
            { Key : this.textFilter },
            { UpdateBy: this.textFilter}
        ]
    };
}

}
