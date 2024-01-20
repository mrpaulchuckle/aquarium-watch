import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActionsSubject, Store } from '@ngrx/store';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ofType } from '@ngrx/effects';
import { AppState } from '../../store';
import { AquariumsActions } from '../../store/aquariums/aquariums.actions';
import { CreateAquariumRequestDto } from '../../../swagger/api-client';

@Component({
  selector: 'app-aquarium-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSelectModule, MatFormFieldModule, MatInputModule],
  templateUrl: './aquarium-form.component.html',
  styleUrls: ['./aquarium-form.component.scss']
})
export class AquariumFormComponent implements OnInit, OnDestroy {
  aquariumForm!: FormGroup;
  private subscriptions = new Subscription();

  constructor(private readonly store: Store<AppState>, private readonly fb: FormBuilder, private actions: ActionsSubject, private readonly router: Router) {}

  ngOnInit(): void {
    this.aquariumForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      type: [null, [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength(255)]]
    });

    this.subscriptions.add(this.actions.pipe(ofType(AquariumsActions.createAquariumSuccess)).subscribe(_ => this.goHome()));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  goHome() {
    this.router.navigateByUrl('/');
  }

  onSubmit(form: FormGroup) {
    if (form.invalid) {
      return;
    }

    const request: CreateAquariumRequestDto = {
      name: form.value.name,
      type: parseInt(form.value.type),
      description: form.value.description
    };

    this.store.dispatch(AquariumsActions.createAquarium({ request }));
  }
}
