import { Component, OnInit } from '@angular/core';

import { ClientsService } from '../../clients.service';
import { Client } from '../client';

@Component({
    selector: 'app-clients-form',
    templateUrl: './clients-form.component.html',
    styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {

    client: Client = new Client;
    success: boolean = false;
    errors: string[] = [];

    constructor(private clientService : ClientsService) {
        
    }

    ngOnInit(): void {

    }

    onSubmit() {
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