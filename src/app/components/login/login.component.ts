import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Usuario } from '../model/usuario';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	username: string = "";
	password: string = "";
	cadastrando: boolean = false;
	mensagemSucesso: string | null = "";
	errors: string[] = [];

	constructor(private router: Router, private authService: AuthService) { }

	ngOnInit(): void {

	}

	onSubmit() {
		this.router.navigate(['/home'])
	}

	preparaCadastrar(event: { preventDefault: () => void; }) {
		event.preventDefault();
		this.cadastrando = true;
	}

	cancelaCadastro() {
		this.cadastrando = false;
	}

	cadastrar() {
		const usuario: Usuario = new Usuario();

		usuario.username = this.username;
		usuario.password = this.password;

		this.authService.salvar(usuario).subscribe(response => {
			this.mensagemSucesso = "Cadastro realizado com sucesso! Efetue o Login.";
			this.errors = [];
		}, erroResponse => {
			this.mensagemSucesso = null;
			this.errors = erroResponse.error.errors;
		});
	}
}