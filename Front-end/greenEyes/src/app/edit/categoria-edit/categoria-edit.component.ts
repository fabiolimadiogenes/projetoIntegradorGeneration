import { AlertsService } from './../../service/alerts.service';
import { environment } from './../../../environments/environment.prod';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from './../../service/categoria.service';
import { Categoria } from './../../model/Categoria';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css']
})
export class CategoriaEditComponent implements OnInit {

  categoria: Categoria = new Categoria()

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private alerts: AlertsService
  ) { }

  ngOnInit(){
    if(environment.token == "")
    {
      this.alerts.showAlertInfo("Sua sessão expirou");
      this.router.navigate(["/login"]);
    }

    let id = this.route.snapshot.params["id"]
    this.findByIdCategoria(id)
  }

  findByIdCategoria(id: number){
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria) =>{
      this.categoria = resp
    })
  }

  atualizar(){
    this.categoriaService.putCategoria(this.categoria).subscribe((resp: Categoria) =>{
      this.categoria = resp
      this.alerts.showAlertSuccess("Categoria atualizada com sucesso!")
      this.router.navigate(["/categoria"])
    })
  }

}
