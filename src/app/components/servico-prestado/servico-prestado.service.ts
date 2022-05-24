import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ServicoPrestado } from '../model/servico-prestado';

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
}