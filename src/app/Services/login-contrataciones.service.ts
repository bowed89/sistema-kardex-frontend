import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginContratacionesService {

  constructor(
    public http: HttpClient
  ) { }

  iniciarSesion(body: object): Observable<any> {
    return this.http.post(`${URL_SERVICIOS}/api/login-contrataciones/signin`, body);
  }
}
