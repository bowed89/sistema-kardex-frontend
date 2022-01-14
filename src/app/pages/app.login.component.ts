import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { UsuarioService } from '../services/usuario.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './app.login.component.html',
  providers: [MessageService]

})
export class AppLoginComponent {
  loginBody = {
    login:"",
    password:""
  }
  constructor(
    public service:LoginService,
    private router: Router,
    private _usuarioService: UsuarioService,
    private serviceMessage: MessageService

  ) { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    console.log('onsubmit');
    
    console.log(this.loginBody)
    this._usuarioService.login(this.loginBody).subscribe(res => {
      console.log(res);
      if(res.message  && res.id_grupo == 4) {
        this.showErrorViaToast('Permisos', 'Debe solicitar permisos al administrador');
      }
      this.router.navigateByUrl('/')


    }, (err) => {
      console.log(err.error);
      this.showErrorViaToast('Error de datos', err.error.msg)

    })
  }
  // Mensajes de alerta
  showSuccessViaToast() {
    this.serviceMessage.add({ key: 'tst', severity: 'success', summary: 'Archivo Almacenado', detail: 'Se almaceno el archivo con éxito' });
  }
  showErrorViaToast(sum, det) {
    this.serviceMessage.add({ key: 'tst', severity: 'error', summary: sum, detail: det });
  }

}
