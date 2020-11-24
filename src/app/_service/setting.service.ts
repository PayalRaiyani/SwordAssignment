import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Settings } from '../_models/settings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

getSettingData(): Observable<Settings[]> {
    return this.http.get<Settings[]>(this.baseUrl);
  }
}
