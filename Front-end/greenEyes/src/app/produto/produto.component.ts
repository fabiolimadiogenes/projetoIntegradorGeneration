import { AlertsService } from './../service/alerts.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  listaProdutos: Produto[];
  categoria: Categoria = new Categoria();
  listaCategoria: Categoria[];
  idCategoria: number;

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private produtoService: ProdutoService,
    private alerts: AlertsService
    ) { }

  ngOnInit()
  {
    if(environment.token == "")
    {
      this.alerts.showAlertInfo("Sua sessão expirou");
      this.router.navigate(["/login"]);
    }
    this.findAllProduto();
    this.findAllCategoria();
  }

  findAllProduto()
  {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp;
    })
  }

  findByIdCategoria()
  {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp;
    })
  }

  findAllCategoria()
  {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp;
    })
  }

  cadastrar()
  {
    this.categoria.id = this.idCategoria;
    this.produto.categoria = this.categoria;
    console.log(this.produto)
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp;
      this.alerts.showAlertSuccess("Produto cadastrado com sucesso");
      this.findAllProduto();
      this.produto = new Produto();
    })
  }
}
