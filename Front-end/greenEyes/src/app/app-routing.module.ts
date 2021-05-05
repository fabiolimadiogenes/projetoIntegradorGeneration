import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},

  {path:"contato", component: ContatoComponent},
  {path:"home", component: HomeComponent},
  {path:"menu", component: MenuComponent},
  {path:"rodape", component: RodapeComponent},
  {path:"sobre-nos", component: SobreNosComponent},
<<<<<<< HEAD
  {path:"cadastro", component:CadastroComponent},
  {path:"login", component:LoginComponent}
=======
  {path:"login", component: LoginComponent},
  {path:"cadastro", component: CadastroComponent},
>>>>>>> cb8de90f0013a887404d4bfea8e4883c003755fc

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
