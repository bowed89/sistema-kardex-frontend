import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosPersonalesService {
  constructor(
    public http: HttpClient
  ) { }

  getAllPersonal(): Observable<any> {
    return this.http.get(`${URL_SERVICIOS}/personal`);
  }

  getListArchivos(): Observable<any> {
    return this.http.get(`${URL_SERVICIOS}/personal`);
  }

  getPersonalById(id: Number): Observable<any> {
    return this.http.get(`${URL_SERVICIOS}/personal/${id}`);
  }

  postSubirImg(file: any): Observable<any> {
    return this.http.post(`${URL_SERVICIOS}/fileupload`, file);
  }

  getPersonalImg(url: object): Observable<any> {
    return this.http.post(`${URL_SERVICIOS}/fileupload/images`, url);
  }

  putPersonal(url: string, body: object): Observable<any> {
    return this.http.put(`${URL_SERVICIOS}/personal/${url}`, body);
  }

  getConyugueById(id: Number): Observable<any> {
    return this.http.get(`${URL_SERVICIOS}/personal/conyugue/${id}`);
  }

  getEducacionById(id: Number): Observable<any> {
    return this.http.get(`${URL_SERVICIOS}/personal/educacion/${id}`);
  }

  putConyugue(url: string, body: object): Observable<any> {
    return this.http.put(`${URL_SERVICIOS}/personal/conyugue/${url}`, body);
  }
  
  postConyugue(body: object): Observable<any> {
    return this.http.post(`${URL_SERVICIOS}/personal/conyugue`, body);
  }

  postDependiente(body: object): Observable<any> {
    return this.http.post(`${URL_SERVICIOS}/personal/dependiente`, body);
  }

  postEducacion(body: object): Observable<any> {
    return this.http.post(`${URL_SERVICIOS}/personal/educacion`, body);
  }

  postExperienciaLaboral(body: object): Observable<any> {
    return this.http.post(`${URL_SERVICIOS}/personal/experiencia`, body);
  }

  getDependientesById(id: number): Observable<any> {
    return this.http.get(`${URL_SERVICIOS}/personal/dependiente/${id}`);
  }

  putDependiente(body: object): Observable<any> {
    return this.http.post(`${URL_SERVICIOS}/personal/dependienteUpdate`, body);
  }

  putEducacion(body: object): Observable<any> {
    return this.http.post(`${URL_SERVICIOS}/personal/educacionUpdate`, body);
  }

  putExperiencia(body: object): Observable<any> {
    return this.http.post(`${URL_SERVICIOS}/personal/experienciaLaboralUpdate`, body);
  }

  deleteEducacion(body: object): Observable<any> {
    return this.http.post(`${URL_SERVICIOS}/personal/educacionDelete`, body);
  }

  deleteDependiente(body: object): Observable<any> {
    return this.http.post(`${URL_SERVICIOS}/personal/dependienteDelete`, body);
  }

  getExperienciaLaboralsById(id: number): Observable<any> {
    return this.http.get(`${URL_SERVICIOS}/personal/experienciaLaboral/${id}`);
  }

  postDocumentos(body: object): Observable<any> {
    return this.http.post(`${URL_SERVICIOS}/personal/documentos`, body);
  }

  getdocumento(body: object): Observable<any> {
    return this.http.get(`${URL_SERVICIOS}/personal/getdocumento`, body);
  }

  deleteDocumento(body: object): Observable<any> {
    return this.http.post(`${URL_SERVICIOS}/personal/deletedocumento`, body);
  }

  getdocumentoid(body: object): Observable<any> {
    return this.http.post(`${URL_SERVICIOS}/personal/getdocumentoid`, body);
  }

}
