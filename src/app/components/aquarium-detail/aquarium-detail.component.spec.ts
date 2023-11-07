import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquariumDetailComponent } from './aquarium-detail.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { provideMockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/store';

describe('AquariumDetailComponent', () => {
  let component: AquariumDetailComponent;
  let fixture: ComponentFixture<AquariumDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AquariumDetailComponent],
      providers: [provideMockStore<AppState>(), { provide: ActivatedRoute, useValue: { params: of([{id: 1}])}}]
    });
    fixture = TestBed.createComponent(AquariumDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
