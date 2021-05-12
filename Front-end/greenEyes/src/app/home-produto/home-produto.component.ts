import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-home-produto',
  templateUrl: './home-produto.component.html',
  styleUrls: ['./home-produto.component.css']
})
export class HomeProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  listaProduto: Produto[];
  categoria: Categoria = new Categoria();
  listaCategoria: Categoria[];
  idProduto: number;

  
  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(environment.token == "")
    {
      alert("Sua sessão expirou")
      this.router.navigate(["/login"])
    }
    let id = this.route.snapshot.params["id"]
    this.findByIdProduto(id)
    

  }

  findByIdProduto(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) =>{
      this.produto = resp
    })
  }


}
