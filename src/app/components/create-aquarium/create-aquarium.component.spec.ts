import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAquariumComponent } from './create-aquarium.component';

describe('CreateAquariumComponent', () => {
  let component: CreateAquariumComponent;
  let fixture: ComponentFixture<CreateAquariumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAquariumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateAquariumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
