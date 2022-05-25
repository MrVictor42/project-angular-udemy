import { Component, OnInit } from '@angular/core';
import { ServicoPrestadoService } from '../servico-prestado.service';
import { ServicoPrestadoBusca } from './servicoPrestadoBusca';

@Component({
	selector: 'app-servico-prestado-lista',
	templateUrl: './servico-prestado-lista.component.html',
	styleUrls: ['./servico-prestado-lista.component.css']
})
export class ServicoPrestadoListaComponent implements OnInit {

	nome: string = "";
	mes: number = 1;
	meses: number[] = [
		1, 2, 3 , 4, 5, 6, 7, 8, 9, 10, 11, 12
	];
	lista : ServicoPrestadoBusca[] = [];
	message : string | null = "";

	constructor(private servicoPrestadoServico : ServicoPrestadoService) {

	}

	ngOnInit(): void {

	}

	consultar() : void {
		this.servicoPrestadoServico.buscar(this.nome, this.mes).subscribe(response => {
			this.lista = response;
			if(this.lista.length == 0) {
				this.message = "Nenhum Registro Encontrado";
			} else {
				this.message = null;
			}
		});
	}
}