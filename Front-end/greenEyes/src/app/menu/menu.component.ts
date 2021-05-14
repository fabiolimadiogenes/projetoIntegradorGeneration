import { AuthService } from './../service/auth.service';
import { ProdutoService } from './../service/produto.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  valorPesquisa: string;

  constructor(
    private router: Router,
    public auth: AuthService,
    private produtoService: ProdutoService,
  ) { }

  ngOnInit(): void {
  }

  pesquisar() {
    if (this.valorPesquisa) {
      this.router.navigate([`/pesquisa/${this.valorPesquisa}`]);
    }
  }

  sair() {
    this.router.navigate(["/login"])
    environment.token = ""
    environment.nome = ""
    environment.foto = ""
    environment.id = 0
  }

}
