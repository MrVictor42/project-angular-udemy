import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClientsService } from '../../clients.service';
import { Client } from '../client';

@Component({
	selector: 'app-client-list',
	templateUrl: './client-list.component.html',
	styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

	clientes: Client[] = [];

	constructor(private clientService : ClientsService, private router : Router) {

	}

	ngOnInit(): void {
		this.clientService.getClientes().subscribe(clients => {
			this.clientes = clients;
		});
	}

	novoCadastro() : void {
		this.router.navigate(["/client-form"])
	}
}