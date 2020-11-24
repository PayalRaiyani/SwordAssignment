import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    OrderModule,
    FilterPipeModule,
    FormsModule
  ]
})
export class SettingsModule { }
