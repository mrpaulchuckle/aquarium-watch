import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AquariumDetailComponent } from './aquarium-detail.component';
import { aquariumsFeature } from '../../store/aquariums/aquariums.reducer';
import { provideMockStore } from '@ngrx/store/testing';
import { AquariumDto, AquariumType } from '../../../swagger/api-client';

describe('AquariumDetailComponent', () => {
  let component: AquariumDetailComponent;
  let fixture: ComponentFixture<AquariumDetailComponent>;
  let route: ActivatedRoute;
  const paramsSubject = new BehaviorSubject({
    id: 1
  });

  const aquariumMock: AquariumDto = {
    id: 1,
    name: 'test',
    description: 'test',
    highTemp: 3,
    lowTemp: 2,
    type: AquariumType.Cold
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [CommonModule, AquariumDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: paramsSubject
          },
        },
        provideMockStore({
          selectors: [
            {
              selector: aquariumsFeature.selectSelectedAquarium,
              value: aquariumMock
            },
            {
              selector: aquariumsFeature.selectLoading,
              value: true
            }
          ]
        })
      ],
    });

    fixture = TestBed.createComponent(AquariumDetailComponent);
    route = TestBed.inject(ActivatedRoute);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct values for aquarium and loading properties', () => {
    fixture.detectChanges();

    expect(component.aquarium()).toEqual(aquariumMock);
    expect(component.loading()).toEqual(true);
  });
});