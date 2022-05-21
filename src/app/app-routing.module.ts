import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientListComponent } from './components/clients/client-list/client-list.component';
import { ClientsFormComponent } from './components/clients/clients-form/clients-form.component';
import { ServicoPrestadoFormComponent } from './components/servico-prestado/servico-prestado-form/servico-prestado-form.component';
import { ServicoPrestadoListaComponent } from './components/servico-prestado/servico-prestado-lista/servico-prestado-lista.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    }, {
        path: 'client-form',
        component: ClientsFormComponent
    }, {
        path: 'client-form/:id',
        component: ClientsFormComponent
    }
    , {
        path: 'client-list',
        component: ClientListComponent
    }, {
        path: 'servico-prestado-form',
        component: ServicoPrestadoFormComponent
    }, {
        path: 'servico-prestado-listagem',
        component: ServicoPrestadoListaComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }