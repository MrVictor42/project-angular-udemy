import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ClientsService } from '../clients.service';
import { Client } from '../../model/client';

@Component({
    selector: 'app-clients-form',
    templateUrl: './clients-form.component.html',
    styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {

    client: Client = new Client;
    success: boolean = false;
    errors: string[] = [];
    id: number = 0;

    constructor(
        private clientService : ClientsService, 
        private router : Router, 
        private activatedRouter : ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.activatedRouter.params.subscribe(params => {
            if(params && params['id'] && params) {
                this.id = params['id'];
                this.clientService.getClientById(this.id).subscribe(client => {
                    this.client = client;
                }, error => {
                    this.client = new Client();
                });
            } else {
                console.log("NÃO TEM PARAMETRO")
            }
        });
    }

    onSubmit() {
        if(this.id) {
            this.clientService.editar(this.client).subscribe(client => {
                this.success = true;
                this.errors = [];
            }, errorResponse => {
                this.errors = ['Erro ao atualizar cliente.'];
            });
        } else {
            this.clientService.salvar(this.client).subscribe(response => {
                this.success = true;
                this.errors = [];
                this.client = response;
            }, errorResponse => {
                this.success = false;
                this.errors = errorResponse.error.errors;
            });
        }
    }

    voltar() {
        this.router.navigate(["client-list"]);
    }
}