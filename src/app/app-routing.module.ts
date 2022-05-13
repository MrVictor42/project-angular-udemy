import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsFormComponent } from './components/clients/clients-form/clients-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    }, {
        path: 'client-form',
        component: ClientsFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }