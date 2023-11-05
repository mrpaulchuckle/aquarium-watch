import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AquariumDto, AquariumType } from 'src/swagger/api-client';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { AquariumsActions } from 'src/app/store/aquariums/aquariums.actions';
import { Router, RouterModule } from '@angular/router';
import { AquariumsHelper } from 'src/app/helpers/aquariums.helper';

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
  AquariumsHelper = AquariumsHelper;

  constructor(private readonly store: Store<AppState>, private readonly router: Router){}

  deleteAquarium() {
    const id = this.aquarium?.id;

    if (!id) {
      return;
    }

    this.store.dispatch(AquariumsActions.deleteAquarium({ id }));
  }

  editAquarium() {
    if (!this.aquarium) {
      return;
    }

		this.router.navigate(['edit', this.aquarium.id]);
  }
}
