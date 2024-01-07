import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { AppState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { AquariumsActions } from 'src/app/store/aquariums/aquariums.actions';
import { aquariumsFeature } from 'src/app/store/aquariums/aquariums.reducer';
import { AquariumsHelper } from 'src/app/helpers/aquariums.helper';

@Component({
  selector: 'app-aquarium-detail',
  standalone: true,
  imports: [CommonModule],
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
