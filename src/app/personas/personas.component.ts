import { Component } from '@angular/core';

@Component({
	selector: 'app-personas',
	templateUrl: './personas.component.html',
	styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
	disable = false;
	message = 'No se ha agregado ninguna persona';
	title = '';
	show = false;

	addPeople() {
		this.show = true;
		this.message = 'Persona agregada';
	}

}
