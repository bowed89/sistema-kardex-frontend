import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { environment } from '../../environments/environment';

import { Usuario } from '../models/usuario.model';
import { URL_SERVICIOS } from '../config/config';

const base_url = environment.base_url;


declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public auth2: any;
  public usuario: any;

  constructor(private http: HttpClient,
    private router: Router,
    private ngZone: NgZone) {

    //this.googleInit();
  }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    "token": localStorage.getItem('token')
  })

  get token(): string {
    return localStorage.getItem('token');
  }

  get uid(): number {
    return this.usuario.id_usuario;
  }


  guardarLocalStorage(id_usuario: string, id_personal: any, id_grupo: any, token: string) {
    localStorage.setItem('id_usuario', id_usuario);
    localStorage.setItem('id_personal', id_personal);
    localStorage.setItem('id_grupo', id_grupo);
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.clear();
  }

  validarToken(): Observable<boolean> {
    return this.http.get(`${URL_SERVICIOS}/login/renew`, {
      headers: { token: this.token }
    }).pipe(
      map((resp: any) => {
        console.log('validarToken', resp);
        if(resp.id_grupo != 4) {
          this.guardarLocalStorage(resp.id_usuario, resp.id_personal, resp.id_grupo, resp.token);
          return true;
        }
      }),
      catchError(error => of(false))
    );
  }

  login(formData: object) {
    // (message: string, id_grupo: any, id_usuario: any, token: string)
    return this.http.post(`${URL_SERVICIOS}/login/signin`, formData)
      .pipe(
        tap((resp: any) => {
          console.log(resp);
          console.log(resp.id_pesonal);

          this.guardarLocalStorage(resp.id_usuario, resp.id_pesonal, resp.id_grupo, resp.token)
        })
      );
  }




}
