import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(
    public http: HttpClient
  ) { }

  getAllUsers() {
    return this.http.get(`${URL_SERVICIOS}/admin`);
  }
  getUsuariById(id: number) {
    return this.http.get(`${URL_SERVICIOS}/admin/${id}`);
  }
  putGrupo(body: object): Observable<any> {
    return this.http.put(`${URL_SERVICIOS}/admin`, body);
  }

}
