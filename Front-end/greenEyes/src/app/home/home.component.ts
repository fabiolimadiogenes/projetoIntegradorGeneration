import { AuthService } from './../service/auth.service';
import { Categoria } from './../model/Categoria';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from './../service/produto.service';
import { CategoriaService } from './../service/categoria.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produto: Produto = new Produto();
  listaProdutos: Produto[];
  categoria: Categoria = new Categoria();
  listaCategoria: Categoria[];
  idCategoria: number;

  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    public authService: AuthService
  ) { }

  ngOnInit(){
    if(environment.token == "")
    {
      alert("Sua sessão expirou");
      this.router.navigate(["/login"]);
    }

    this.findAllProduto()
  }

  findAllProduto()
  {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp;
    })
  }

}
