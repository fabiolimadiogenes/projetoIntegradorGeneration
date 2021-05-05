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
      }
    })
  }
}
