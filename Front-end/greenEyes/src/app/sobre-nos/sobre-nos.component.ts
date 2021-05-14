import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css']
})
export class SobreNosComponent implements OnInit {

  qr: string = "../assets/img/QR_code_1.jpg"

  constructor(private router: Router) { }

  ngOnInit(){
    if(environment.token == "")
    {
      alert("Sua sessÃ£o expirou");
      this.router.navigate(["/login"]);
    }
    const element1 = document.getElementById("id_1")!
    const element2 = document.getElementById("id_2")!
    const element3 = document.getElementById("id_3")!
    const element4 = document.getElementById("id_4")!
    const element5 = document.getElementById("id_5")!
    const element6 = document.getElementById("id_6")!

    element1.addEventListener("mouseover", () => {
      this.MostrarQR(1);
    });
    element2.addEventListener("mouseover", () => {
      this.MostrarQR(2);
    });
    element3.addEventListener("mouseover", () => {
      this.MostrarQR(3);
    });
    element4.addEventListener("mouseover", () => {
      this.MostrarQR(4);
    });
    element5.addEventListener("mouseover", () => {
      this.MostrarQR(5);
    });
    element6.addEventListener("mouseover", () => {
      this.MostrarQR(6);
    });
  }

  MostrarQR(id:number){
        // this.qr = "../assets/img/QR_code_" + id + ".jpg"
    if(id == 1){
      this.qr = "https://i.imgur.com/VRinsEP.png"
    }
    if(id == 2){
      this.qr = "https://i.imgur.com/FXqNbnl.png"
    }
    if(id == 3){
      this.qr = "https://i.imgur.com/zUFomST.png"
    }
    if(id == 4){
      this.qr = "https://i.imgur.com/utPqA0U.png"
    }
    if(id == 5){
      this.qr = "https://i.imgur.com/7mudkqz.png"
    }
    if(id == 6){
      this.qr = "https://i.imgur.com/yy3OlLI.png"
    }

  }

}
