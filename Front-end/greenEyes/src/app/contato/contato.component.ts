import { Router } from '@angular/router';
import { AlertsService } from './../service/alerts.service';
import { environment } from 'src/environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(
    private alerts: AlertsService,
    private router: Router
  ) { }

  ngOnInit() {
    if(environment.token == "")
    {
      this.alerts.showAlertInfo("Sua sessão expirou");
      this.router.navigate(["/login"]);
    }
  }

}
