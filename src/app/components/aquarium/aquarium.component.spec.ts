import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AquariumComponent } from './aquarium.component';
import { AquariumDto, AquariumType } from '../../../swagger/api-client';
import { AquariumsActions } from '../../store/aquariums/aquariums.actions';

describe('AquariumComponent', () => {
  let component: AquariumComponent;
  let fixture: ComponentFixture<AquariumComponent>;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [CommonModule, RouterModule, RouterTestingModule, AquariumComponent],
      providers: [
        provideMockStore(),
      ],
    });

    fixture = TestBed.createComponent(AquariumComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch deleteAquarium action when deleteAquarium is called', () => {
    const aquariumMock: AquariumDto = {
      id: 1,
      name: 'test',
      description: 'test',
      highTemp: 3,
      lowTemp: 2,
      type: AquariumType.Cold
    };

    component.aquarium = aquariumMock;

    spyOn(store, 'dispatch');
    component.deleteAquarium();

    expect(store.dispatch).toHaveBeenCalledWith(AquariumsActions.deleteAquarium({ id: aquariumMock.id }));
  });

  it('should not dispatch deleteAquarium action when deleteAquarium is called with undefined id', () => {
    spyOn(store, 'dispatch');
    component.deleteAquarium();

    expect(store.dispatch).not.toHaveBeenCalled();
  });

  it('should navigate to edit route when editAquarium is called', () => {
    const navigateSpy = spyOn((component as any).router, 'navigate');
    component.aquarium = { id: 1 } as AquariumDto;

    component.editAquarium();

    expect(navigateSpy).toHaveBeenCalledWith(['edit', 1]);
  });

  it('should not navigate when editAquarium is called with undefined aquarium', () => {
    const navigateSpy = spyOn((component as any).router, 'navigate');
    component.editAquarium();

    expect(navigateSpy).not.toHaveBeenCalled();
  });
});