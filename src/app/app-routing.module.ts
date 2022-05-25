import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientListComponent } from './components/clients/client-list/client-list.component';
import { ClientsFormComponent } from './components/clients/clients-form/clients-form.component';
import { LoginComponent } from './components/login/login.component';
import { ServicoPrestadoFormComponent } from './components/servico-prestado/servico-prestado-form/servico-prestado-form.component';
import { ServicoPrestadoListaComponent } from './components/servico-prestado/servico-prestado-lista/servico-prestado-lista.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: LayoutComponent, children: [
        { path: 'home', component: HomeComponent },
        { path: 'clientes', children: [
            { path: 'form', component: ClientsFormComponent },
            { path: 'form/:id', component: ClientsFormComponent },
            { path: 'list', component: ClientListComponent },
            { path: '', redirectTo: '/clientes/list', pathMatch: 'full' }
        ]},
        { path: 'servico-prestado', children: [
            { path: 'form', component: ServicoPrestadoFormComponent },
            { path: 'listagem', component: ServicoPrestadoListaComponent },
            { path: '', redirectTo: '/servico-prestado/listagem', pathMatch: 'full' }
        ]}
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }