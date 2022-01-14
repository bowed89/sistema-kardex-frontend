import { Component, OnInit } from '@angular/core';
import { DatosPersonalesService } from 'src/app/Services/datos-personales.service';
import { SelectItem } from 'primeng/primeng';
import { ActivatedRoute } from '@angular/router';

import { MessageService } from 'primeng/api';
import { base64StringToBlob } from 'blob-util';

// Modals
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogService } from 'primeng/dynamicdialog';
import { DatoPersonalModal } from '../modals/datos-personales';
import { DatosConyugueModal } from '../modals/datos-conyugue';
import { DatosDependientesModal } from '../modals/datos-dependientes';
import { DatosEducacionModal } from '../modals/datos-educacion';
import { ExperienciaLaboralModal } from '../modals/experiencia-laboral';

@Component({
  selector: 'app-datos-salud',
  templateUrl: './formularios-personales.component.html',
  styleUrls: ['./formularios-personales.component.css'],
  providers: [MessageService, DialogService]
})
export class FormulariosPersonalesComponent implements OnInit {
  ref: DynamicDialogRef

  cols: any[];
  colsLlenado: any[];
  personal: any;
  idPersonal: number;
  nombre: string;
  formData = new FormData();
  booleanGrupo: boolean = true;
  listadoArchivos: Array<any> = [];
  listadoArchivos2: Array<any> = [];
  listadoFotos: Array<any> = [];
  listadoFotos2: Array<any> = [];
  disableBtn: boolean = true;
  pdf: any;

  // modales
  dialogVisibleForm26: boolean;

  //dropdown
  extensionLlenado: SelectItem[];

  images: any[];
  imagesCivil: any[];
  findUrl: any;

  constructor(
    private _datosPersonalesService: DatosPersonalesService,
    private activatedRoute: ActivatedRoute,
    private service: MessageService,
    public dialogService: DialogService,

  ) { }

  modalDatosP() {
    this.ref = this.dialogService.open(DatoPersonalModal, {
      header: 'Formulario Datos Personales',
      width: '70%',
      contentStyle: { "max-height": "700px", "overflow": "auto" },
      baseZIndex: 10000,
      dismissableMask: true

    });
    this.ref.onClose.subscribe((product) => {
      if (product) {
        console.log("product", product);
      }
    });
  }
  modalDatosC() {
    this.ref = this.dialogService.open(DatosConyugueModal, {
      header: 'Formulario Datos Conyugue',
      width: '70%',
      contentStyle: { "max-height": "700px", "overflow": "auto" },
      baseZIndex: 10000,
      dismissableMask: true
    });
    this.ref.onClose.subscribe((product) => {
      if (product) {
        console.log(product);
      }
    });
  }
  modalDatosDep() {
    this.ref = this.dialogService.open(DatosDependientesModal, {
      header: 'Formulario Datos Dependientes',
      width: '70%',
      contentStyle: { "max-height": "700px", "overflow": "auto" },
      baseZIndex: 10000,
      dismissableMask: true

    });
    this.ref.onClose.subscribe((product) => {
      if (product) {
        console.log(product);
      }
    });
  }

  modalDatosEduc() {
    this.ref = this.dialogService.open(DatosEducacionModal, {
      header: 'Formulario Datos Educación',
      width: '70%',
      contentStyle: { "max-height": "700px", "overflow": "auto" },
      baseZIndex: 10000,
      dismissableMask: true
    });
    this.ref.onClose.subscribe((product) => {
      if (product) {
        console.log(product);
      }
    });
  }

  modalExperienciaLab() {
    this.ref = this.dialogService.open(ExperienciaLaboralModal, {
      header: 'Formulario Experiencia Laboral',
      width: '70%',
      contentStyle: { "max-height": "700px", "overflow": "auto" },
      baseZIndex: 10000,
      dismissableMask: true
    });
    this.ref.onClose.subscribe((product) => {
      if (product) {
        console.log(product);
      }
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('id_grupo') == '3') {
      this.booleanGrupo = false;
    }
    this.idPersonal = this.activatedRoute.snapshot.params['id'];
    this.images = [];
    this.imagesCivil = [];

    this._datosPersonalesService.getPersonalById(this.idPersonal).subscribe(res => {
      this.personal = res
      this.nombre = `${res[0].ap_paterno} ${res[0].ap_materno} ${res[0].nombres}`
      // obtenemos listado de los archivos del directorio
      this.findUrl = {
        url: `../Uploads/${this.nombre}/FORMULARIOS PERSONALES`
      }
      this._datosPersonalesService.getPersonalImg(this.findUrl).subscribe(res => {
        console.log('res ==> ', res.array);
        console.log('res ==> ', res.response);
        console.log('res ==> ', res.fileNames2);
        this.listadoArchivos = res.fileNames2;
        this.listadoArchivos2 = res.response;
      })
      // obtenemos listado de las fotos del directorio
      let findImgUrl = {
        url: `../Uploads/${this.nombre}/FOTO PERSONAL`
      }
      this._datosPersonalesService.getPersonalImg(findImgUrl).subscribe(res => {
        console.log('res ==> ', res.fileNames2);
        console.log('res ==> ', res.array);
        if (res.array !== undefined) {
          if (Object.keys(res.array).length > 0) {
            this.disableBtn = false;
          }
        }


        this.listadoFotos = res.fileNames2;
        this.listadoFotos2 = res.response;

      })
    })


    // Dropdown PrimeNG
    this.extensionLlenado = [];
    this.extensionLlenado.push(
      { label: 'SELECCIONAR ACCIÓN', value: null },
      { label: 'DATOS PERSONALES', value: 'datos-personales' },
      { label: 'DATOS DE CONYUGUE', value: 'datos-conyugue' },
      { label: 'DEPENDIENTES', value: 'datos-dependientes' },
      { label: 'EDUCACIÓN', value: 'datos-educacion' },
      { label: 'EXPERIENCIA LABORAL', value: 'experiencia-laboral' }
    )
    // nombres de columnas de las tablas
    this.cols = [
      { field: 'nombres', header: 'NOMBRES' },
      { field: 'ap_paterno', header: 'APELLIDOS' },
      { field: 'ci', header: 'DOCUMENTO DE IDENTIDAD' },
      { field: '', header: 'ACCIONES' },
    ];
    // nombres de columnas de las tablas llenado de datos del funcionario
    this.colsLlenado = [
      { field: 'nombres', header: 'NOMBRES' },
      { field: 'ap_paterno', header: 'APELLIDOS' },
      { field: '', header: 'LLENADO' },
    ];
  }

  preview(files: FileList) {
    // application/pdf o image/jpeg o image/png
    console.log('tipo de archivo', files[0]['type']);
    //si la pestaña es Ficha de Personal SIGMA
    let url;
    if (files[0]['type'] == 'application/pdf') {
      url = {
        "tipoProceso": "FORMULARIOS PERSONALES",
        "nombrePersonal": (this.nombre).toUpperCase()
      }
    } else {
      url = {
        "tipoProceso": "FOTO PERSONAL",
        "nombrePersonal": (this.nombre).toUpperCase()
      }
    }


    this.formData.delete('photo');
    this.formData.append('photo', files[0]);

    this.formData.delete('nombrePersonal');
    this.formData.delete('tipoProceso');

    this.formData.append('nombrePersonal', url.nombrePersonal);
    this.formData.append('tipoProceso', url.tipoProceso);


    this._datosPersonalesService.postSubirImg(this.formData).subscribe(res => {
      console.log(res);
      this.showSuccessViaToast()
      // volver a llamar el servicio d imagenes al hacer un insert
      this.ngOnInit()
    }, (err) => {
      this.showErrorViaToast()
    })

  }

  // Mensajes de alerta
  showSuccessViaToast() {
    this.service.add({ key: 'tst', severity: 'success', summary: 'Archivo Almacenado', detail: 'Se almaceno el archivo satisfactoriamente' });
  }
  showErrorViaToast() {
    this.service.add({ key: 'tst', severity: 'error', summary: 'Error', detail: 'Problemas al almacenar el archivo' });
  }

  seleccionarAccion(value, id) {
    console.log('value', value);
    console.log('id', id);
    if (value == 'datos-personales') {
      this.modalDatosP()
    }
    if (value == 'datos-conyugue') {
      this.modalDatosC()
    }
    if (value == 'datos-dependientes') {
      this.modalDatosDep()
    }
    if (value == 'datos-educacion') {
      this.modalDatosEduc()
    }
    if (value == 'experiencia-laboral') {
      this.modalExperienciaLab()
    }
  }
  mostrarImg(e, index) {
    console.log(e.target.value);
    console.log(index);
    console.log(this.listadoArchivos2[index]);
    const contentType = 'application/pdf';
    let blob1 = base64StringToBlob(this.listadoArchivos2[index], contentType);
    this.pdf = URL.createObjectURL(blob1);
    console.log('blob', this.pdf);
    window.open(this.pdf);
  }

  /* mostrarImg2(e, index) {
    console.log(e.target.value);
    console.log(index);
    console.log(this.listadoFotos2[index]);
    const contentType = 'application/png';
    let blob1 = base64StringToBlob(this.listadoFotos2[index], contentType);
    this.pdf = URL.createObjectURL(blob1);
    console.log('blob', this.pdf);
    window.open(this.pdf);
  } */



}
