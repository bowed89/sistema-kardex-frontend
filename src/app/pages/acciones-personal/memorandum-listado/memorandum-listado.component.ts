import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosPersonalesService } from 'src/app/Services/datos-personales.service';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-memorandum-listado',
  templateUrl: './memorandum-listado.component.html',
  styleUrls: ['./memorandum-listado.component.css']
})
export class MemorandumListadoComponent implements OnInit {
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
        { label: 'MEMORANDUM 1RA PARTE', value: 'memorandum1' },
        { label: 'MEMORANDUM 2DA PARTE', value: 'memorandum2' })
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
    if (value == 'memorandum1') {
      this.router.navigate([`/memorandum1/${id}`])
    }
    if (value == 'memorandum2') {
      this.router.navigate([`/memorandum2/${id}`])
    }
  }

}
