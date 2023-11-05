import { Component, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AquariumComponent } from '../aquarium/aquarium.component';
import { Store } from '@ngrx/store';
import { AquariumsActions } from 'src/app/store/aquariums/aquariums.actions';
import { AppState } from 'src/app/store';
import { selectAquariums } from 'src/app/store/aquariums/aquariums.selectors';
import { AquariumDto } from 'src/swagger/api-client';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AquariumComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  aquariums: Signal<AquariumDto[]> = this.store.selectSignal(selectAquariums);

  constructor(private readonly store: Store<AppState>) {
    this.store.dispatch(AquariumsActions.loadAquariums());
  }
}
