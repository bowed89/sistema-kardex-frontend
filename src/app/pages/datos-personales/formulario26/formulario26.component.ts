import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosPersonalesService } from 'src/app/Services/datos-personales.service';

import * as moment from 'moment';

import { drawDOM, pdf } from "@progress/kendo-drawing";

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-formulario26',
  templateUrl: './formulario26.component.html',
  styleUrls: ['./formulario26.component.css']
})
export class Formulario26Component implements OnInit {
  getPersonal: Array<any> = [];
  getConyugue: Array<any> = [];
  getDependientes: Array<any> = [];
  getEducBachiller: Array<any> = [];
  getEducTecnico: Array<any> = [];
  getEdLicenciatura: Array<any> = [];
  getPostgrado: Array<any> = [];
  getEspecialidad: Array<any> = [];
  getSeminario: Array<any> = [];
  photo: any;
  fechaActual: string;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _datosPersonalesService: DatosPersonalesService,

  ) { }

  ngOnInit(): void {
    var actualDate = moment()
    this.fechaActual = moment(actualDate['_d']).format('YYYY-MM-DD')

    let idPersonal = this.activatedRoute.snapshot.params['id'];
    this._datosPersonalesService.getPersonalById(idPersonal).subscribe(res => {
      console.log('personal ==> ', res);
      let nombre = `${res[0].ap_paterno} ${res[0].ap_materno} ${res[0].nombres}`
      this.getPersonal = res;

      // obtenemos listado de las fotos del directorio
      let findImgUrl = {
        url: `../Uploads/${nombre}/FOTO PERSONAL`
      }
      console.log('findImgUrl', findImgUrl);
      this._datosPersonalesService.getPersonalImg(findImgUrl).subscribe(res => {
        console.log('res ==> ', res.fileNames2);
        console.log('res ==> ', res.response);
        this.photo = `data:image/png;base64,${res.response}`
      })

    })
    this._datosPersonalesService.getDependientesById(idPersonal).subscribe(res => {
      this.getDependientes = res;
    })

    this._datosPersonalesService.getConyugueById(idPersonal).subscribe(res => {
      this.getConyugue = res;
    })
    
    this._datosPersonalesService.getEducacionById(idPersonal).subscribe(res => {
      console.log('educacion ==> ', res);
      for (let i in res) {
        if (res[i].titulo == 'BACHILLER') {
          this.getEducBachiller.push(res[i]);
        }
        if (res[i].titulo == 'TECNICO MEDIO' || res[i].titulo == 'TECNICO SUPERIOR') {
          this.getEducTecnico.push(res[i]);
        }
        if (res[i].titulo == 'LICENCIATURA') {
          this.getEdLicenciatura.push(res[i]);
        }
        if (res[i].titulo == 'MAESTRIA' || res[i].titulo == 'DOCTORADO') {
          this.getPostgrado.push(res[i]);
        }
        if (res[i].titulo == 'ESPECIALIDAD') {
          this.getEspecialidad.push(res[i]);
        }
        if (res[i].titulo == 'SEMINARIO-OTRO') {
          this.getSeminario.push(res[i]);
        }
      }
    })
    setTimeout(() => {
      this.exportPDF()
    }, 500)

    setTimeout(() => {
      this.exportPDF2();
    }, 800)

    setTimeout(() => {
      let id = this.activatedRoute.snapshot.params['id']
      this.router.navigate(['formularios-personales', id])
    }, 1200)
  }

  exportPDF() {
    var contents = $('#impreso')[0];
    const img = document.getElementById("impreso")
    drawDOM(contents, {
      forcePageBreak: ".page-break",
      paperSize: ['18in', '20in'],
      margin: { left: '5cm', top: '1cm', right: '3cm', bottom: '0cm' }
    }).then(function (group) {
      pdf.saveAs(group, "pagina1-formulario26.pdf");
    });
    //this.router.navigateByUrl('formulario-listado')
  }

  exportPDF2() {
    var contents = $('#impreso2')[0];
    const img = document.getElementById("impreso")
    drawDOM(contents, {
      forcePageBreak: ".page-break",
      paperSize: ['18in', '20in'],
      margin: { left: '5cm', top: '1cm', right: '3cm', bottom: '0cm' }
    }).then(function (group) {
      pdf.saveAs(group, "pagina2-formulario26.pdf");
    });
    //this.router.navigateByUrl('formulario-listado')
  }

}
