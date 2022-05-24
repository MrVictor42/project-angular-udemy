import { Component, OnInit } from '@angular/core';

import { Client } from '../../model/client';
import { ClientsService } from '../../clients/clients.service';
import { ServicoPrestado } from '../../model/servico-prestado';
import { ServicoPrestadoService } from '../servico-prestado.service';

@Component({
	selector: 'app-servico-prestado-form',
	templateUrl: './servico-prestado-form.component.html',
	styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

	success: boolean = false;
    errors: string[] = [];
	clientes : Client[] = [];
	servico : ServicoPrestado = new ServicoPrestado();

	constructor(private clienteService: ClientsService, private servicoPrestadoService : ServicoPrestadoService) { }

	ngOnInit(): void {
		this.clienteService.getClientes().subscribe(response => {
			this.clientes = response;
		});
	}

	onSubmit() : void {
		this.servicoPrestadoService.salvar(this.servico).subscribe(response => {
			this.success = true;
			this.errors = [];
			this.servico = new ServicoPrestado();
		}, errorResponse => {
			this.success = false;
			this.errors = errorResponse.error.errors;
		});
	}
}