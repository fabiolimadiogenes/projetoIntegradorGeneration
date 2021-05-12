import { Component, OnInit } from '@angular/core';
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
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll (0,0)
    this.router.navigate(["/login"])
    environment.token = ""
    environment.nome = ""
    environment.foto = ""
    environment.id = 0
  }

  entrar(){
    this.auth.entrar(this.login).subscribe((resp: Login) =>{
      this.login = resp

      environment.token = this.login.token
      environment.nome = this.login.nome
      environment.id = this.login.id

      console.log(environment.id)

      this.router.navigate(["/home"])
    }, erro =>{
      if(erro.status == 500){
        alert("Usuario ou senha estão incorretos!")
      }
    })
  }

}
