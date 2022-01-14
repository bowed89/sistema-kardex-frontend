import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosPersonalesService } from 'src/app/Services/datos-personales.service';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-experiencia-trabajo-listado',
  templateUrl: './otros-documentos-listado.component.html',
  styleUrls: ['./otros-documentos-listado.component.css']
})
export class OtrosDocumentosListadoComponent implements OnInit {

  cols: any[];
  personal: any;
  selectedCar: any;
  idGrupo: string;
  idPersonal: string;

  //dropdown
  accionseleccionada: any;
  extension: SelectItem[];

  cities: any[];

  constructor(
    private _datosPersonalesService: DatosPersonalesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.idGrupo = localStorage.getItem('id_grupo');
    this.idPersonal = localStorage.getItem('id_personal');
    // nombres de columnas de las tablas
    this.cols = [
      { field: 'nombres', header: 'NOMBRES' },
      { field: 'ap_paterno', header: 'APELLIDOS' },
      { field: 'ci', header: 'DOCUMENTO DE IDENTIDAD' },
      { field: '', header: 'ACCIONES' },
    ];
    // Dropdown 
    this.extension = []
    // ADMINISTRADOR
    if (this.idGrupo == '1') {
      // dropdown
      this.extension.push(
        { label: 'Seleccione una Acción', value: null },
        { label: 'Certificado de Idioma Nativo', value: 'certificado-idioma-nativo' },
        { label: 'Libreta Militar', value: 'libreta-militar' },
        { label: 'Registro NUA/CUA AFP', value: 'registro-nua-cua-afp' },
        { label: 'Registro Cuenta Banco Union', value: 'cuenta-banco-union' },
        { label: 'Certificado 1178 Cencap/EGPP', value: 'certificado-1178' },
        { label: 'Certificado Politicas Publicas Cencap/EGPP', value: 'certificado-politicas-publicas' },
        { label: 'Certificado Resp. Funcion Publica Cencap/EGPP', value: 'certificado-egpp' },
        { label: 'Certificado de No Violencia SIPASE', value: 'certificado-sipase' },
        { label: 'Certificado de Antecedentes Penales REJAP', value: 'certificado-rejap' },
        { label: 'Carnet de Identidad', value: 'carnet-identidad' },
        { label: 'Licencia de Conducir y fotocopia de CI Garantes (SOLO CHOFERES)', value: 'licencia-conducir' },
        { label: 'Certificado de Antecedentes Transito,Transporte y Seguridad Vial (SOLO CHOFERES)', value: 'certificado-antecedentes-transito' },

      )
      // mostrar funcionarios
      this._datosPersonalesService.getAllPersonal().subscribe(res => {
        this.personal = res;
      })
    }
    // FUNCIONARIO
    if (this.idGrupo == '3') {
      // dropdown
      this.extension.push(
        { label: 'Seleccione una Acción', value: null },
        { label: 'FORMULARIOS PERSONALES', value: 'formularios-personales' })
      // mostrar funcionario
      this._datosPersonalesService.getPersonalById(parseInt(this.idPersonal)).subscribe(res => {
        console.log('res', res);
        this.personal = res;
      })
    }
  }

  seleccionarAccion(value, id) {
    console.log('value', value);
    console.log('id', id);
    if (value == 'certificado-idioma-nativo') {
      this.router.navigate([`/idioma-nativo/${id}`])
    }
    if (value == 'libreta-militar') {
      this.router.navigate([`/libreta-militar/${id}`])
    }
    if (value == 'registro-nua-cua-afp') {
      this.router.navigate([`/registro-nua-cua-afp/${id}`])
    }
    if (value == 'cuenta-banco-union') {
      this.router.navigate([`/cuenta-banco-union/${id}`])
    }
    if (value == 'certificado-1178') {
      this.router.navigate([`/certificado-1178/${id}`])
    }
    if (value == 'certificado-politicas-publicas') {
      this.router.navigate([`/certificado-politicas-publicas/${id}`])
    }
    if (value == 'certificado-egpp') {
      this.router.navigate([`/certificado-egpp/${id}`])
    }
    if (value == 'certificado-sipase') {
      this.router.navigate([`/certificado-sipase/${id}`])
    }
    if (value == 'certificado-rejap') {
      this.router.navigate([`/certificado-rejap/${id}`])
    }
    if (value == 'carnet-identidad') {
      this.router.navigate([`/carnet-identidad/${id}`])
    }
    if (value == 'licencia-conducir') {
      this.router.navigate([`/licencia-conducir/${id}`])
    }
    if (value == 'certificado-antecedentes-transito') {
      this.router.navigate([`/certificado-antecedentes-transito/${id}`])
    }
  }

}
