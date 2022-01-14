import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnidadSolicitanteService {
  datosFormulario: object;
  
  constructor(
    public http: HttpClient
  ) { }

  getTdr() {
    return this.http.get(`${URL_SERVICIOS}/api/tdr`);
  }

  getDireccion() {
    return this.http.get(`${URL_SERVICIOS}/api/tdr/direccion`);
  }


  postTdr(body: object): Observable<object> {
    return this.http.post(`${URL_SERVICIOS}/api/tdr/add`, body);
  }
  
  getTdrId(id: number): Observable<object> {
    return this.http.get(`${URL_SERVICIOS}/api/tdr/${id}`);
  }
  
  putTdr(body: any, id: number): Observable<object> {
    return this.http.put(`${URL_SERVICIOS}/api/tdr/put/${id}`, body);
  }

  getPostulantes() {
    return this.http.get(`${URL_SERVICIOS}/api/tdr/postulantes`);
  }
  postFuc(body: object): Observable<object> {
    return this.http.post(`${URL_SERVICIOS}/api/tdr/add/fuc`, body);
  }
  getFucId(id: number): Observable<object> {
    return this.http.get(`${URL_SERVICIOS}/api/tdr/getfuc/${id}`);
  }
  getProyectoId(id: number): Observable<object> {
    return this.http.get(`${URL_SERVICIOS}/api/tdr/proyecto/${id}`);
  }
  getCuadroE(){
    return this.http.get(`${URL_SERVICIOS}/api/tdr/cuadro-equivalencia`);
  }
  getProyecto() {
    return this.http.get(`${URL_SERVICIOS}/api/tdr/proyecto`);
  }
  findIdTdrinFuc(id: string) {
    return this.http.get(`${URL_SERVICIOS}/api/tdr/buscar-id-tdr-fuc/${id}`);
  }
  getFucByIdTdr(id: string) {
    return this.http.get(`${URL_SERVICIOS}/api/fuc/getFucByIdTdr/${id}`);
  }
  getDatasForFucById(id: string) {
    return this.http.get(`${URL_SERVICIOS}/api/fuc/getDatasForFucById/${id}`);
  }
}
