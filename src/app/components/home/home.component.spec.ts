import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { HomeComponent } from './home.component';
import { AquariumDto, AquariumType } from 'src/swagger/api-client';
import { aquariumsFeature } from 'src/app/store/aquariums/aquariums.reducer';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const aquarium: AquariumDto = {
    id: 0,
    name: '',
    highTemp: 0,
    lowTemp: 0,
    type: AquariumType.Cold
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideMockStore(
        {
          initialState: { aquariums: { entities: [] } },
          selectors: [
            { selector: aquariumsFeature.selectAll as any, value: [] }
          ]
        }
      )]
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
