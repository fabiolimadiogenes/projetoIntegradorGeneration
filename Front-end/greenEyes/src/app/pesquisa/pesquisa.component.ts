import { Component, OnInit } from '@angular/core';
import { AlertsService } from './../service/alerts.service';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  listaProdutos: Produto[] = []

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alerts: AlertsService
  ) { }

  ngOnInit(): void {
    if(environment.token == "")
    {
      this.alerts.showAlertInfo("Sua sessão expirou")
      this.router.navigate(["/login"])
    }

    // Ele fica observando a url, caso tenha alguma mudança, ele executa o que está dentro do subscribe
    this.activatedRoute.params.subscribe(url => {
      const nome = url['nome']
      if (nome) {
        this.findByNomeProduto(nome)
      } else {
        this.listaProdutos = []
      }
    })
  }

  findByNomeProduto(nome: string){
    this.produtoService.getByNomeProduto(nome).subscribe((resp: Produto[]) =>{
      this.listaProdutos = resp
    })
  }

}
