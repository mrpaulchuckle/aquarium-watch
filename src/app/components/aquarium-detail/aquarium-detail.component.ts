import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { AppState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { AquariumsActions } from 'src/app/store/aquariums/aquariums.actions';
import { selectSelectedId, selectedAquarium } from 'src/app/store/aquariums/aquariums.selectors';

@Component({
  selector: 'app-aquarium-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aquarium-detail.component.html',
  styleUrls: ['./aquarium-detail.component.scss']
})
export class AquariumDetailComponent implements OnInit {
  aquarium$ = this.store.select(selectedAquarium);

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.store.dispatch(AquariumsActions.loadAquarium({ id: params['id'] }));
      }
    )
  }
}
