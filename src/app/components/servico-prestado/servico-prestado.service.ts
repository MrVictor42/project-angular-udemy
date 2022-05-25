import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ServicoPrestado } from '../model/servico-prestado';
import { ServicoPrestadoBusca } from './servico-prestado-lista/servicoPrestadoBusca';

@Injectable({
	providedIn: 'root'
})
export class ServicoPrestadoService {

	apiURL : string = environment.apiURLBase + '/api/servico-prestados';

	constructor(private http: HttpClient) {

	}

	salvar(servicoPrestado : ServicoPrestado) : Observable<ServicoPrestado> {
		return this.http.post<ServicoPrestado>(`${ this.apiURL }`, servicoPrestado);
	}

	buscar(nome : string, mes: number) : Observable<ServicoPrestadoBusca[]> {

		const httpParams = new HttpParams().set("nome", nome).set("mes", mes ? mes.toString() : '');
		const url = this.apiURL + "?"  + httpParams.toString();
		// /api/servico-prestado?nome=Victor42&mes=09
		return this.http.get<any>(url);
	}
}