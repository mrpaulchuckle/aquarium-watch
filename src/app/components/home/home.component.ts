import { Component, OnInit, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AquariumComponent } from '../aquarium/aquarium.component';
import { Store } from '@ngrx/store';
import { aquariumsFeature } from '../../store/aquariums/aquariums.reducer';
import { AquariumDto } from '../../../swagger/api-client';
import { AppState } from '../../store';
import { AquariumsActions } from '../../store/aquariums/aquariums.actions';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AquariumComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  aquariums: Signal<AquariumDto[]> = this.store.selectSignal(aquariumsFeature.selectAll);
  loading = this.store.selectSignal(aquariumsFeature.selectLoading);

  constructor(private readonly store: Store<AppState>) {}
  
  ngOnInit(): void {
    this.store.dispatch(AquariumsActions.loadAquariums());
  }
}
