import { AlertsComponent } from './../alerts/alerts.component';
import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(
    private bsModalService: BsModalService

  ) { }

  private showAlert(msg: string, tipo: string){
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertsComponent)
    bsModalRef.content.type = tipo
    bsModalRef.content.message = msg
  }

  showAlertDanger(msg: string){
    this.showAlert(msg, 'danger')
  }

  showAlertSuccess(msg: string){
    this.showAlert(msg, 'success')
  }

  showAlertInfo(msg: string){
    this.showAlert(msg, 'info')
  }



}
