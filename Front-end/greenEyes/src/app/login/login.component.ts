import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Login } from '../model/Login';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class LoginComponent implements OnInit {

<<<<<<< HEAD
  Login: Login =  new Login()
  constructor(
    private auth: AuthService,
    private router : Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.Login).subscribe((resp:Login)=>{
      this.Login = resp
      environment.token = this.Login.token
      environment.nome = this.Login.nome
      environment.id = this.Login.id

      //console.log(environment.token)
      //console.log(environment.nome)
      //console.log(environment.foto)
      //console.log(environment.id)

      this.router.navigate(['/inicio'])

    }, erro =>{
      if(erro.status== 500){
        alert('Usuário ou senha estão incorretos!')
=======
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
>>>>>>> cb8de90f0013a887404d4bfea8e4883c003755fc
      }
    })
  }
}
