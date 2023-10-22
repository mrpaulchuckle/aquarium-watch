import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Aquarium, AquariumDto, AquariumType } from 'src/swagger/api-client';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { AquariumsActions } from 'src/app/store/aquariums/aquariums.actions';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-aquarium',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './aquarium.component.html',
  styleUrls: ['./aquarium.component.scss']
})
export class AquariumComponent {
  @Input() aquarium: AquariumDto | undefined;

  AquariumType = AquariumType;

  constructor(private readonly store: Store<AppState>){}

  deleteAquarium() {
    const id = this.aquarium?.id;

    if (!id) {
      return;
    }

    this.store.dispatch(AquariumsActions.deleteAquarium({ id }));
  }

  getAquariumType(): string {
    if (!this.aquarium?.type) {
      return '';
    }

    return AquariumType[this.aquarium.type];
  }
}
