import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Aquarium, AquariumDto, AquariumType } from 'src/swagger/api-client';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { AquariumsActions } from 'src/app/store/aquariums/aquariums.actions';
import { Router, RouterModule } from '@angular/router';

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

  constructor(private readonly store: Store<AppState>, private readonly router: Router){}

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

  editAquarium() {
    if (!this.aquarium) {
      return;
    }

    this.store.dispatch(AquariumsActions.selectAquarium({id: this.aquarium.id}))
		this.router.navigate(['edit', this.aquarium.id]);
  }
}
