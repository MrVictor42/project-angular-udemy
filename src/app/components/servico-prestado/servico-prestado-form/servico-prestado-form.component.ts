import { Component, OnInit } from '@angular/core';

import { Client } from '../../model/client';
import { ClientsService } from '../../clients/clients.service';
import { ServicoPrestado } from '../../model/servico-prestado';

@Component({
	selector: 'app-servico-prestado-form',
	templateUrl: './servico-prestado-form.component.html',
	styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

	clientes : Client[] = [];
	servico : ServicoPrestado = new ServicoPrestado();

	constructor(private clienteService: ClientsService) { }

	ngOnInit(): void {
		this.clienteService.getClientes().subscribe(response => {
			this.clientes = response;
		});
	}

	onSubmit() : void {
		console.log(this.servico)
	}
}