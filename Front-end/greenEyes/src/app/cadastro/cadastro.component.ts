import { AlertsService } from './../service/alerts.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: Usuario = new Usuario()
  confirmarSenha: string
  tipoUsuario: string


  constructor(
    private authService: AuthService,
    private router: Router,
    private alerts: AlertsService
  ) { }

  ngOnInit()  {
    window.scroll(0,0);
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  cadastrar(){
    this.user.tipo = this.tipoUsuario

    if(this.user.senha != this.confirmarSenha){
      this.alerts.showAlertDanger("As senhas não conferem!")
    } else{
      this.authService.cadastrar(this.user).subscribe((resp: Usuario) => {this.user = resp})
      this.router.navigate(["/login"])
      this.alerts.showAlertSuccess("Usuário cadastrado com sucesso!")
    }
  }
}
