import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Client } from './clients/client';

@Injectable({
	providedIn: 'root'
})
export class ClientsService {

	constructor(private http: HttpClient) { 

	}

	salvar(client : Client) : Observable<Client> {
		return this.http.post<Client>("http://localhost:8000/api/clientes", client);
	}

	getCliente() : Client {
		const client = new Client();

		client.nome = "victor";
		client.cpf = "88888888888";

		return client;
	}
}
