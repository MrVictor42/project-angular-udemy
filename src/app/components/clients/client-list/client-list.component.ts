import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClientsService } from '../clients.service';
import { Client } from '../../model/client';

@Component({
	selector: 'app-client-list',
	templateUrl: './client-list.component.html',
	styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

	clientes: Client[] = [];
	clienteSelecionado : Client = new Client();
	mensagemSucesso : string = "";
	mensagemErro : string = "";

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

	preparaDelecao(client : Client) : void {
		this.clienteSelecionado = client;
	}

	deletarCliente() : void {
		this.clientService.deletar(this.clienteSelecionado).subscribe(response => {
			this.mensagemSucesso = "Cliente deletado com sucesso";
			this.ngOnInit();
		}, error => {
			this.mensagemErro = "Ocorreu um erro ao deletar um cliente";
		});
	}
}