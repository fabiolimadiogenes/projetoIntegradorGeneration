import { AlertsService } from './../service/alerts.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Login } from '../model/Login';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-entrar',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  login: Login = new Login()

  constructor(
    private auth: AuthService,
    private router: Router,
    private alerts: AlertsService
  ) { }

  ngOnInit(){
    window.scroll (0,0)
    this.router.navigate(["/login"])
    environment.token = ""
    environment.nome = ""
    environment.foto = ""
    environment.tipo= ""
    environment.id = 0
  }

  entrar(){
    this.auth.entrar(this.login).subscribe((resp: Login) =>{
      this.login = resp
      environment.token = this.login.token
      environment.nome = this.login.nome
      environment.id = this.login.id
      environment.tipo = this.login.tipo

      this.router.navigate(["/home"])
    }, erro =>{
      if(erro.status == 500){
      this.alerts.showAlertDanger('Usuario ou senha estão incorretos!')
      }
    })
  }

}
