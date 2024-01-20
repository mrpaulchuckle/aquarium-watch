import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { AquariumComponent } from '../aquarium/aquarium.component';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { HomeComponent } from './home.component';
import { aquariumsFeature } from '../../store/aquariums/aquariums.reducer';
import { AquariumsActions } from '../../store/aquariums/aquariums.actions';
import { AquariumDto } from '../../../swagger/api-client';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: MockStore;
  const mockAquariums: AquariumDto[] = [
    { id: 1, name: 'Aquarium 1', type: 1, description: 'Description 1', highTemp: 0, lowTemp: 0 },
    { id: 2, name: 'Aquarium 2', type: 2, description: 'Description 2', highTemp: 0, lowTemp: 0 },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [CommonModule, HomeComponent, AquariumComponent],
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: aquariumsFeature.selectAll,
              value: mockAquariums
            },
            {
              selector: aquariumsFeature.selectLoading,
              value: false
            }
          ]
        })
      ]
    });

    store = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadAquariums action on component initialization', () => {
    fixture.detectChanges();

    store.scannedActions$.subscribe(actions => {
      expect(actions).toEqual(AquariumsActions.loadAquariums());
    });
  });

  it('should have the correct values for aquariums and loading properties', () => {
    fixture.detectChanges();

    expect(component.aquariums()).toEqual(mockAquariums);
    expect(component.loading()).toEqual(false);
  });

  it('should render AquariumComponent for each aquarium', () => {
    fixture.detectChanges();

    const aquariumComponents = fixture.nativeElement.querySelectorAll('app-aquarium');
    expect(aquariumComponents.length).toEqual(mockAquariums.length);
  });
});