import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Client } from './clients/client';

@Injectable({
	providedIn: 'root'
})
export class ClientsService {

	constructor(private http: HttpClient) { 

	}

	getCliente() : Client {
		const client = new Client();

		client.nome = "victor";
		client.cpf = "88888888888";

		return client;
	}
}
