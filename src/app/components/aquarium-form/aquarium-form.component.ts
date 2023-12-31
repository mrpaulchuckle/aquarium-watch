import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AquariumType, CreateAquariumRequestDto } from 'src/swagger/api-client';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActionsSubject, Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { AquariumsActions } from 'src/app/store/aquariums/aquariums.actions';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ofType } from '@ngrx/effects';

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
      name: ['', [Validators.required]],
      type: [AquariumType.Cold, [Validators.required]]
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
      type: parseInt(form.value.type)
    };

    this.store.dispatch(AquariumsActions.createAquarium({ request }));
  }
}
