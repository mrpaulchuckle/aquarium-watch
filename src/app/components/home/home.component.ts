import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AquariumComponent } from '../aquarium/aquarium.component';
import { Store } from '@ngrx/store';
import { AquariumsActions } from 'src/app/store/aquariums/aquariums.actions';
import { AppState } from 'src/app/store';
import { selectAquariums } from 'src/app/store/aquariums/aquariums.selectors';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AquariumComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  aquariums$ = this.store.select(selectAquariums);

  constructor(private readonly store: Store<AppState>) {
    this.store.dispatch(AquariumsActions.loadAquariums());
  }
}
