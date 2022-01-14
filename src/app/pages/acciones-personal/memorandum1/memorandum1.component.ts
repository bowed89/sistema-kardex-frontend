import { Component, OnInit } from '@angular/core';

import { DatosPersonalesService } from 'src/app/Services/datos-personales.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { base64StringToBlob } from 'blob-util';

@Component({
  selector: 'app-memorandum1',
  templateUrl: './memorandum1.component.html',
  styleUrls: ['./memorandum1.component.css'],
  providers: [MessageService]
})
export class Memorandum1Component implements OnInit {
  cols: any[];
  idPersonal: number;
  nombre: string;
  formData = new FormData();
  imagesCi: Array<any> = []
  findUrl: any;
  booleanGrupo: boolean = true;
  listadoArchivos: Array<any> = [];
  listadoArchivos2: Array<any> = [];
  pdf: any;

  tipo_memo: string[] = [];


  constructor(
    private _datosPersonalesService: DatosPersonalesService,
    private activatedRoute: ActivatedRoute,
    private service: MessageService
  ) { }

  onChange() {
    const memo = this.tipo_memo[this.tipo_memo.length - 1];
    this.tipo_memo.length = 0;
    this.tipo_memo.push(memo);
    console.log('this.tipo_memo',( this.tipo_memo).toString());
  }

  ngOnInit(): void {
    this.idPersonal = this.activatedRoute.snapshot.params['id']
    this._datosPersonalesService.getPersonalById(this.idPersonal).subscribe(res => {
      this.nombre = `${res[0].ap_paterno} ${res[0].ap_materno} ${res[0].nombres}`
      // Inicializar cargando las imagenes de la  pestaña 
      this.findUrl = {
        url: `../Uploads/${this.nombre}/MEMORANDUMS 1RA PARTE`
      }
      this._datosPersonalesService.getPersonalImg(this.findUrl).subscribe(res => {
        console.log(res);
        console.log('res ==> ', res.array);
        console.log('res ==> ', res.response);
        console.log('res ==> ', res.fileNames2);
        this.listadoArchivos = res.fileNames2;
        this.listadoArchivos2 = res.response;
      })
    })

    // nombres de columnas de las tablas
    this.cols = [
      { field: 'nombres', header: 'NOMBRES' },
      { field: 'ap_paterno', header: 'APELLIDOS' },
      { field: 'ci', header: 'DOCUMENTO DE IDENTIDAD' },
      { field: '', header: 'ACCIONES' },
      { field: '', header: 'SUBIR ARCHIVO' }
    ];
  }
  preview(files: FileList) {
    // application/pdf o image/jpeg o image/png
    console.log('tipo de archivo', files[0]['type']);
    //si la pestaña es Ficha de Personal SIGMA
    let url = {
      "tipoProceso": "MEMORANDUMS 1RA PARTE",
      "nombrePersonal": (this.nombre).toUpperCase(),
      "tipo_memo": (this.tipo_memo).toString()
    }
    this.formData.delete('photo');
    this.formData.append('photo', files[0]);

    this.formData.delete('nombrePersonal');
    this.formData.delete('tipoProceso');
    this.formData.delete('tipo_memo');

    this.formData.append('nombrePersonal', url.nombrePersonal);
    this.formData.append('tipoProceso', url.tipoProceso);
    this.formData.append('tipo_memo', url.tipo_memo);

    console.log('this.formData', this.formData);

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
    this.service.add({ key: 'tst', severity: 'success', summary: 'Archivo Almacenado', detail: 'Se almaceno el archivo con éxito' });
  }
  showErrorViaToast() {
    this.service.add({ key: 'tst', severity: 'error', summary: 'Error', detail: 'Problemas al almacenar el archivo' });
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

}
