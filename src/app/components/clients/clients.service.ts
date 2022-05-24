import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { Client } from '../model/client';

@Injectable({
	providedIn: 'root'
})
export class ClientsService {

	apiURL : string = environment.apiURLBase + '/api/clientes';

	constructor(private http: HttpClient) { 

	}

	salvar(client : Client) : Observable<Client> {
		return this.http.post<Client>(`${ this.apiURL }`, client);
	}

	editar(client : Client) : Observable<any> {
		return this.http.put<Client>(`${ this.apiURL }/${ client.id }`, client);
	}

	getClientes() : Observable<Client[]> {
		return this.http.get<Client[]>(`${ this.apiURL }/users_list`);
	}

	getClientById(id : number) : Observable<Client> {
		return this.http.get<Client>(`${ this.apiURL }/${ id }`);
	}

	deletar(client : Client) : Observable<any> {
		return this.http.delete<any>(`${ this.apiURL }/${ client.id }`)
	}
}