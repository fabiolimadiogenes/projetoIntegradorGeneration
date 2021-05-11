import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from './../../service/produto.service';
import { environment } from 'src/environments/environment.prod';
import { FormsModule } from '@angular/forms';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {

  produto: Produto = new Produto();
  categoria: Categoria = new Categoria();
  listaCategorias: Categoria[];
  idCategoria: number;

  constructor(private produtoService: ProdutoService, private router: Router, private route: ActivatedRoute,
              private categoriaService: CategoriaService) { }

  ngOnInit()
  {
    if(environment.token == "")
    {
      alert("Sua sessão expirou");
      this.router.navigate(["/login"]);
    }
    let id = this.route.snapshot.params['id'];
    this.findByIdProduto(id);
    this.findAllCategoria();
  }

  findByIdProduto(id: number)
  {
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp;
    })
  }

  findAllCategoria()
  {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp;
    })
  }

  findByIdCategoria()
  {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp;
    })
  }

  atualizar()
  {
    this.categoria.id = this.idCategoria;
    this.produto.categoria = this.categoria;
    this.produtoService.putProduto(this.produto).subscribe((resp: Produto) =>{
      this.produto = resp
      alert("Produto atualizado com sucesso!")
      this.router.navigate(["/produto"])
    })
  }
}
