import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]

  constructor(
    private router: Router,
    private categoriaService: CategoriaService
    ) { }

  ngOnInit()
  {
    if(environment.token == "")
    {
      //alert("Sua sessão expirou");
      this.router.navigate(["/login"]);
    }
    this.findAllCategoria();
  }

  findAllCategoria()
  {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp;
    })
  }

  cadastrar()
  {
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria) => {
      this.categoria = resp;
      alert("Categoria cadastrado com sucesso");
      this.findAllCategoria();
      this.categoria = new Categoria();
    })
  }
}
