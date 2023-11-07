import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AquariumComponent } from './aquarium.component';
import { provideMockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/store';

describe('AquariumComponent', () => {
  let component: AquariumComponent;
  let fixture: ComponentFixture<AquariumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AquariumComponent],
      providers: [provideMockStore<AppState>()]
    });
    fixture = TestBed.createComponent(AquariumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
