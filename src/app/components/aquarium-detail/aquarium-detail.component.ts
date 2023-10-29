import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AquariumDto } from 'src/swagger/api-client';
import { ActivatedRoute, Params } from '@angular/router';
import { AppState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { selectAquariumById } from 'src/app/store/aquariums/aquariums.selectors';

@Component({
  selector: 'app-aquarium-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aquarium-detail.component.html',
  styleUrls: ['./aquarium-detail.component.scss']
})
export class AquariumDetailComponent implements OnInit {
  aquarium$!: Observable<AquariumDto | undefined>;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.aquarium$ = this.store.select(selectAquariumById(params['id']));
      }
    )
  }
}
