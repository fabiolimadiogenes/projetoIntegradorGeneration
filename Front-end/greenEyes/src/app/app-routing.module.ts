import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},

  {path:"contato", component: ContatoComponent},
  {path:"home", component: HomeComponent},
  {path:"menu", component: MenuComponent},
  {path:"rodape", component: RodapeComponent},
  {path:"sobre-nos", component: SobreNosComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
