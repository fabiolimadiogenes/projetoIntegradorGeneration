import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProdutoComponent } from './produto/produto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    HomeComponent,
    SobreNosComponent,
    ContatoComponent,
    LoginComponent,
    CadastroComponent,
    CategoriaEditComponent,
    ProdutoEditComponent,
    CategoriaDeleteComponent,
    ProdutoDeleteComponent,
    CategoriaComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
