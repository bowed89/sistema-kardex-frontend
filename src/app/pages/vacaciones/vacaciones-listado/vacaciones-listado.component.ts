import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosPersonalesService } from 'src/app/Services/datos-personales.service';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-vacaciones-listado',
  templateUrl: './vacaciones-listado.component.html',
  styleUrls: ['./vacaciones-listado.component.css']
})
export class VacacionesListadoComponent implements OnInit {
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
        { label: 'VACACIONES', value: 'vacaciones' },
        { label: 'CALIFICACIÓN DE AÑOS DE SERVICIO', value: 'calificacion-anios-servicio' })
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
    if (value == 'vacaciones') {
      this.router.navigate([`/vacaciones/${id}`])
    }
    if (value == 'calificacion-anios-servicio') {
      this.router.navigate([`/calificacion-anios-servicio/${id}`])
    }
  }

}
