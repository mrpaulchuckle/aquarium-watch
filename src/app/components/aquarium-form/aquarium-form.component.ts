import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AquariumType, CreateAquariumRequestDto } from 'src/swagger/api-client';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { AquariumsActions } from 'src/app/store/aquariums/aquariums.actions';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { selectAquariums } from 'src/app/store/aquariums/aquariums.selectors';

@Component({
  selector: 'app-aquarium-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSelectModule, MatFormFieldModule, MatInputModule],
  templateUrl: './aquarium-form.component.html',
  styleUrls: ['./aquarium-form.component.scss']
})
export class AquariumFormComponent implements OnInit {
  aquariumForm!: FormGroup;

  constructor(private readonly store: Store<AppState>, private readonly fb: FormBuilder, private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.aquariumForm = this.fb.group({
      name: ['', [Validators.required]],
      type: [AquariumType.Cold, [Validators.required]]
    });

    const aquariumId: number = this.route?.snapshot?.params['id'];

    console.log(aquariumId);

    this.store.select(selectAquariums).pipe(
    ).subscribe(x => {
      console.log(x);
    });
  }

  onSubmit(form: FormGroup) {
    if (form.invalid) {
      return;
    }

    const request: CreateAquariumRequestDto = {
      name: form.value.name,
      type: parseInt(form.value.type)
    };

    this.store.dispatch(AquariumsActions.createAquarium({ request }));
  }
}
