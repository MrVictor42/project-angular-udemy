import { Component, OnInit } from '@angular/core';

import { ClientsService } from '../../clients.service';
import { Client } from '../client';

@Component({
    selector: 'app-clients-form',
    templateUrl: './clients-form.component.html',
    styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {

    client : Client 

    constructor(private clientService : ClientsService) {
        this.client = clientService.getCliente();
    }

    ngOnInit(): void {

    }

    onSubmit() {
        console.log(this.client)
    }
}