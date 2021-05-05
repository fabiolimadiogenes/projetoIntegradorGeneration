import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
<<<<<<< HEAD
import { Login } from '../model/Login';
=======
>>>>>>> cb8de90f0013a887404d4bfea8e4883c003755fc
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastroComponent implements OnInit {

<<<<<<< HEAD
  user: Usuario = new Usuario
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value

  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
  }

  cadastrar() {

    if (this.user.senha != this.confirmarSenha) {
      alert('A senha está incorreta')

    } else {
      this.authService.cadastrar(this.user).subscribe((resp: Usuario) => {
        this.user = resp
        this.router.navigate(['/entrar'])
        alert('Usuario cadastrado com sucesso')
      })

    }

=======
  user: Usuario = new Usuario()
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit()  {
    window.scroll(0,0)

  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
>>>>>>> cb8de90f0013a887404d4bfea8e4883c003755fc
  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  cadastrar(){
    // this.user.tipo = this.tipoUsuario

    if(this.user.senha != this.confirmarSenha){
      alert("As senhas não conferem!")
    } else{
      this.authService.cadastrar(this.user).subscribe((resp: Usuario) => {this.user = resp})
      this.router.navigate(["/login"])
      alert("Usuário cadastrado com sucesso!")
    }
  }
}

