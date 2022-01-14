import { Component, OnInit } from '@angular/core';
import { AdministradorService } from 'src/app/Services/administrador.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-permisos-listado',
  templateUrl: './permisos-listado.component.html',
  styleUrls: ['./permisos-listado.component.css'],
  providers: [MessageService]
})
export class PermisosListadoComponent implements OnInit {
  cols: any[];
  id_personal: any;
  personal: any;
  selectedCar: any;
  tipoPermiso: string;
  dialogVisible: boolean;
  valueSelect: string;

  //dropdown
  accionseleccionada: any;

  constructor(
    private _administradorService: AdministradorService,
    private service: MessageService

  ) { }

  ngOnInit(): void {

    // nombres de columnas de las tablas
    this.cols = [
      { field: 'login', header: 'LOGIN' },
      { field: 'descripcion', header: 'TIPO DE PERMISO' },
      { field: '', header: 'PERMISOS' },
    ];
    this._administradorService.getAllUsers().subscribe(res => {
      this.personal = res
      console.log(this.personal);
    })
  }


  seleccionarAccion(value, idUsuario) {
    let body;
    let idGrupo;

    if (value == 'administrador') {
      idGrupo = 1;
    }
    if (value == 'consultas') {
      idGrupo = 2;
    }
    if (value == 'funcionario') {
      idGrupo = 3;
    }
    if (value == 'inhabilitar') {
      idGrupo = 4;
    }

    body = {
      id: idUsuario,
      id_grupo: idGrupo
    }
    console.log('body', body);
  }

  abrirModal(idUsuario) {
    this.dialogVisible = true;
    this.id_personal = idUsuario;
    this._administradorService.getUsuariById(idUsuario).subscribe(res => {
      for (let i in res) {
        this.accionseleccionada = res[i].id_grupo;
      }
    })
  }

  dropboxSelect(event) {
    this.valueSelect = event.target.value;
    console.log(this.valueSelect);
  }

  dropboxSend() {
    let body = {
      id: this.id_personal,
      id_grupo: parseInt(this.valueSelect)
    }
    console.log(body);
    this._administradorService.putGrupo(body).subscribe(res => {
      console.log(res);
      this.showSuccessViaToast();
      this.ngOnInit()
    }, (err) => {
      this.showErrorViaToast();
    })

  }
  
  // Mensajes de alerta
  showSuccessViaToast() {
    this.service.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Message sent' });
  }
  showErrorViaToast() {
    this.service.add({ key: 'tst', severity: 'error', summary: 'Error', detail: 'Problemas al almacenar el archivo' });
  }


}
