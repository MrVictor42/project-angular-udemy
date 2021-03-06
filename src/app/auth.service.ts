import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

import { environment } from '../environments/environment';
import { Usuario } from './components/model/usuario';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	apiURL : string = environment.apiURLBase + "/api/usuarios";
	tokenURL : string = environment.apiURLBase + environment.tokenURL;
	clientId : string = environment.clientId;
	clientSecret : string = environment.clientSecret;
	jwtHelper : JwtHelperService = new JwtHelperService();

	constructor(private http : HttpClient) {

	}

	encerrarSessao() {
		localStorage.removeItem("access_token");
	}

	getUsuarioAutenticado() {
		const token = this.obterToken();

		if(token) {
			const usuario = this.jwtHelper.decodeToken(token).user_name;
			return usuario;
		} else {
			return null;
		}
	}

	obterToken() {
		const tokenString = localStorage.getItem("access_token")

		if(tokenString) {
			const token = JSON.parse(tokenString).access_token
			return token;
		} else {
			return null;
		}
	}

	isAuthenticated() : boolean {
		const token = this.obterToken();
		if(token) {
			const expired = this.jwtHelper.isTokenExpired(token);
			return !expired; //ele vai estar autenticado quando o expired for falso
		}
		return false;
	}

	salvar(usuario : Usuario) : Observable<any> {
		return this.http.post<any>(this.apiURL, usuario);
	}

	login(username : string, password: string) : Observable<any> {
		const params = 
			new HttpParams()
				.set("username", username)
				.set("password", password)
				.set("grant_type", "password");
		const headers = {
			"Authorization" : "Basic " + btoa(`${ this.clientId }:${ this.clientSecret }`),
			"Content-Type" : "application/x-www-form-urlencoded"
		};

		return this.http.post(this.tokenURL, params.toString(), { headers });
	}
}
