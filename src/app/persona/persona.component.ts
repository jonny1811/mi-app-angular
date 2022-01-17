import { Component } from '@angular/core';

@Component({
	selector: 'app-persona',
	templateUrl: './persona.component.html',
	styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
	firstName: string = 'Juan';
	lastName: string = 'Perez';
	age: number = 25;
	/* private age: number = 25;

	getAge(): number {
		return this.age;
	} */
}
