import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import { map, tap } from 'rxjs/operators'; 
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) { }


  iniciarSesion(user: any) {
    const base_url = environment.base_url;

    const body = JSON.stringify( user );
    console.log(body)
    let url = `${ base_url }/usuarios`
    //let url = urlGlobal.urlServe + 'auth/login';
    const headers = new HttpHeaders().set(
        'Content-Type', 'application/json'
    );
    return this.http.post<any>( url, user, {headers: headers} )
        .pipe(
          tap( data => {
            if ( data.ok ) {
              console.log();
              localStorage.setItem('nombre',JSON.stringify(data))
              localStorage.setItem('token',JSON.stringify(data.token))
            }
          }),
          map( data => {
          console.log('Entro en el mapa del rxjs'); 
          //this.guardarToken(data['token']);
            return data;
        }));
}
}
