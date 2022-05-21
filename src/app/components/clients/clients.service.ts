import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Client } from '../model/client';

@Injectable({
	providedIn: 'root'
})
export class ClientsService {

	constructor(private http: HttpClient) { 

	}

	salvar(client : Client) : Observable<Client> {
		return this.http.post<Client>("http://localhost:8000/api/clientes", client);
	}

	editar(client : Client) : Observable<any> {
		return this.http.put<Client>(`http://localhost:8000/api/clientes/${ client.id }`, client);
	}

	getClientes() : Observable<Client[]> {
		return this.http.get<Client[]>("http://localhost:8000/api/clientes/users_list");
	}

	getClientById(id : number) : Observable<Client> {
		return this.http.get<Client>(`http://localhost:8000/api/clientes/${ id }`);
	}

	deletar(client : Client) : Observable<any> {
		return this.http.delete<any>(`http://localhost:8000/api/clientes/${ client.id }`)
	}
}