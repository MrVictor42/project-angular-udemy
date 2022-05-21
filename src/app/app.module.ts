import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './template/navbar/navbar.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { ClientsFormComponent } from './components/clients/clients-form/clients-form.component';
import { ClientsService } from './components/clients/clients.service';
import { ClientListComponent } from './components/clients/client-list/client-list.component';
import { ServicoPrestadoFormComponent } from './components/servico-prestado/servico-prestado-form/servico-prestado-form.component';
import { ServicoPrestadoListaComponent } from './components/servico-prestado/servico-prestado-lista/servico-prestado-lista.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		SidebarComponent,
		HomeComponent,
		ClientsFormComponent,
  ClientListComponent,
  ServicoPrestadoFormComponent,
  ServicoPrestadoListaComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule
	],
	providers: [
		ClientsService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
