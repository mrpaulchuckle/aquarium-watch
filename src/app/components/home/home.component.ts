import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AquariumComponent } from '../aquarium/aquarium.component';
import { Store } from '@ngrx/store';
import { selectAquariums } from 'src/app/store/aquariums/aquariums.selectors';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AquariumComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private readonly store: Store){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
