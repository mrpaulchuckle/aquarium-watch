import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActionsSubject, Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AquariumFormComponent } from './aquarium-form.component';
import { AquariumsActions } from '../../store/aquariums/aquariums.actions';
import { AquariumDto, AquariumType, CreateAquariumRequestDto } from '../../../swagger/api-client';

describe('AquariumFormComponent', () => {
  let component: AquariumFormComponent;
  let fixture: ComponentFixture<AquariumFormComponent>;
  let storeSpy: jasmine.SpyObj<Store>;
  let actionsSubject: Subject<any>;
  const aquariumMock: AquariumDto = {
    id: 1,
    name: 'test',
    description: 'test',
    highTemp: 3,
    lowTemp: 2,
    type: AquariumType.Cold
  };

  beforeEach(() => {
    storeSpy = jasmine.createSpyObj('Store', ['dispatch']);
    actionsSubject = new Subject();

    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        AquariumFormComponent,
        CommonModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        RouterTestingModule,
      ],
      providers: [
        { provide: Store, useValue: storeSpy },
        { provide: ActionsSubject, useValue: actionsSubject },
      ],
    });

    fixture = TestBed.createComponent(AquariumFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with default values', () => {
    component.ngOnInit();

    expect(component.aquariumForm.get('name')?.value).toEqual('');
    expect(component.aquariumForm.get('type')?.value).toEqual(null);
    expect(component.aquariumForm.get('description')?.value).toEqual('');
  });

  it('should dispatch createAquarium action on form submission', () => {
    const formValue = {
      name: 'Test Aquarium',
      type: '1',
      description: 'Test description',
    };

    component.ngOnInit();
    component.aquariumForm.setValue(formValue);
    
    const expectedRequest: CreateAquariumRequestDto = {
      name: formValue.name,
      type: parseInt(formValue.type),
      description: formValue.description,
    };

    component.onSubmit(component.aquariumForm);

    expect(storeSpy.dispatch).toHaveBeenCalledWith(AquariumsActions.createAquarium({ request: expectedRequest }));
  });

  it('should call goHome method on createAquariumSuccess action', async(() => {
    spyOn(component, 'goHome');
    component.ngOnInit();

    actionsSubject.next(AquariumsActions.createAquariumSuccess({ aquarium: aquariumMock}));

    fixture.whenStable().then(() => {
      expect(component.goHome).toHaveBeenCalled();
    });
  }));
});