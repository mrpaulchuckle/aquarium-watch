import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ApiClient } from "src/swagger/api-client";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AquariumsActions } from "./aquariums.actions";
import { EMPTY, catchError, map, switchMap, tap } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class AquariumsEffects {
    constructor(private actions$: Actions, private apiClient: ApiClient, private readonly router: Router){}

	loadAquariums$ = createEffect(() => this.actions$.pipe(
		ofType(AquariumsActions.loadAquariums),
		switchMap(_ => this.apiClient.aquarium_GetAquariums().pipe(
			map(data => AquariumsActions.loadAquariumsSuccess({ aquariums: data.result })),
			catchError(() => [AquariumsActions.loadAquariumsFailed()])
		))
	));

	createAquarium$ = createEffect(() => this.actions$.pipe(
		ofType(AquariumsActions.createAquarium),
		switchMap(({ request }) => this.apiClient.aquarium_CreateAquarium(request).pipe(
			map(response => AquariumsActions.createAquariumSuccess({ aquarium: response.result })),
			catchError(() => EMPTY)
		))
	));

	createAquariumSuccess$ = createEffect(() => this.actions$.pipe(
		ofType(AquariumsActions.createAquariumSuccess),
		tap(_ => this.router.navigateByUrl('/'))
	), { dispatch: false });

	deleteAquarium$ = createEffect(() => this.actions$.pipe(
		ofType(AquariumsActions.deleteAquarium),
		switchMap(({ id }) => this.apiClient.aquarium_DeleteAquarium(id).pipe(
			map(_ => AquariumsActions.deleteAquariumSuccess({ id })),
			catchError(() => EMPTY)
		))
	));

	loadAquarium$ = createEffect(() => this.actions$.pipe(
		ofType(AquariumsActions.loadAquarium),
		switchMap(({ id }) => this.apiClient.aquarium_GetAquariumById(id).pipe(
			map(data => AquariumsActions.loadAquariumSuccess({ aquarium: data.result })),
			catchError(() => [AquariumsActions.loadAquariumFailed()])
		))
	));

	loadAquariumSuccess$ = createEffect(() => this.actions$.pipe(
		ofType(AquariumsActions.loadAquariumSuccess),
		map(({ aquarium }) => AquariumsActions.selectAquarium({ id: aquarium.id }))
	))
}