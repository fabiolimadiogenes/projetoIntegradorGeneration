import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/Login';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient)
  {
  }

  entrar(userLogin: Login): Observable<Login>
  {
    return this.http.post<Login>('http://localhost:8080/usuarios/logar', userLogin)
  }

  cadastrar(user: Usuario): Observable<Usuario>
  {
    return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar', user)
  }

  logado()
  {
    let ok: boolean = false

    if (environment.token != "")
    {
      ok = true
    }

    return ok
  }
}
