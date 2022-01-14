import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(
    public http: HttpClient
  ) { }

  getAllMenu(): Observable<any> {
    return this.http.get(`${URL_SERVICIOS}/menu/`);
  }
  getMenuById(body: object): Observable<any> {
    return this.http.post(`${URL_SERVICIOS}/menu`, body);
  }
}
