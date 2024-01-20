import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { aquariumsFeature } from '../../store/aquariums/aquariums.reducer';
import { AquariumsHelper } from '../../helpers/aquariums.helper';
import { AppState } from '../../store';
import { AquariumsActions } from '../../store/aquariums/aquariums.actions';
import { AquariumFormComponent } from '../aquarium-form/aquarium-form.component';

@Component({
  selector: 'app-aquarium-detail',
  standalone: true,
  imports: [CommonModule, AquariumFormComponent],
  templateUrl: './aquarium-detail.component.html',
  styleUrls: ['./aquarium-detail.component.scss']
})
export class AquariumDetailComponent implements OnInit {
  aquarium = this.store.selectSignal(aquariumsFeature.selectSelectedAquarium);
  loading = this.store.selectSignal(aquariumsFeature.selectLoading);

  AquariumsHelper = AquariumsHelper;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.store.dispatch(AquariumsActions.loadAquarium({ id: params['id'] }));
      }
    )
  }
}
