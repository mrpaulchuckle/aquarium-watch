import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquariumFormComponent } from './aquarium-form.component';
import { provideMockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/store';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AquariumFormComponent', () => {
  let component: AquariumFormComponent;
  let fixture: ComponentFixture<AquariumFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AquariumFormComponent, NoopAnimationsModule],
      providers: [provideMockStore<AppState>()]
    });
    fixture = TestBed.createComponent(AquariumFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
