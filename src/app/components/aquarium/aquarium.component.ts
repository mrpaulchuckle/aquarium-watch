import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Aquarium, AquariumType } from 'src/swagger/api-client';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { AquariumsActions } from 'src/app/store/aquariums/aquariums.actions';

@Component({
  selector: 'app-aquarium',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aquarium.component.html',
  styleUrls: ['./aquarium.component.scss']
})
export class AquariumComponent {
  @Input() aquarium: Aquarium | undefined;

  AquariumType = AquariumType;

  constructor(private readonly store: Store<AppState>){}

  deleteAquarium() {
    const id = this.aquarium?.id;

    if (!id) {
      return;
    }

    this.store.dispatch(AquariumsActions.deleteAquarium({ id }));
  }
}
