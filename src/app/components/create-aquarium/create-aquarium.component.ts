import { Component } from '@angular/core';
import { AquariumFormComponent } from '../aquarium-form/aquarium-form.component';

@Component({
  selector: 'app-create-aquarium',
  standalone: true,
  imports: [AquariumFormComponent],
  templateUrl: './create-aquarium.component.html',
  styleUrl: './create-aquarium.component.scss'
})
export class CreateAquariumComponent {

}
