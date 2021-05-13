import { AlertsService } from './../service/alerts.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css']
})
export class SobreNosComponent implements OnInit {

  constructor(
    private router: Router,
    private alerts: AlertsService
    ) { }

  ngOnInit(){
    if(environment.token == "")
    {
      this.alerts.showAlertInfo("Sua sessão expirou");
      this.router.navigate(["/login"]);
    }
  }

}
