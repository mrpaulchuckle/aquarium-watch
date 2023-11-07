import { inject } from "@angular/core";
import { ApiClient } from "src/swagger/api-client";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AquariumsActions } from "./aquariums.actions";
import { EMPTY, catchError, map, switchMap, tap } from "rxjs";
import { Router } from "@angular/router";

export const loadAquariums = createEffect((actions$ = inject(Actions), apiClient = inject(ApiClient)) => {
	return actions$.pipe(
		ofType(AquariumsActions.loadAquariums),
		switchMap(_ => apiClient.aquarium_GetAquariums().pipe(
			map(data => AquariumsActions.loadAquariumsSuccess({ aquariums: data.result })),
			catchError(() => [AquariumsActions.loadAquariumsFailed()])
		))
	);
}, { functional: true });

export const createAquarium = createEffect((actions$ = inject(Actions), apiClient = inject(ApiClient)) => {
	return actions$.pipe(
		ofType(AquariumsActions.createAquarium),
		switchMap(({ request }) => apiClient.aquarium_CreateAquarium(request).pipe(
			map(response => AquariumsActions.createAquariumSuccess({ aquarium: response.result })),
			catchError(() => EMPTY)
		))
	);
}, { functional: true });

export const deleteAquarium = createEffect((actions$ = inject(Actions), apiClient = inject(ApiClient)) => {
	return actions$.pipe(
		ofType(AquariumsActions.deleteAquarium),
		switchMap(({ id }) => apiClient.aquarium_DeleteAquarium(id).pipe(
			map(_ => AquariumsActions.deleteAquariumSuccess({ id })),
			catchError(() => EMPTY)
		))
	);
}, { functional: true });

export const loadAquarium = createEffect((actions$ = inject(Actions), apiClient = inject(ApiClient)) => {
	return actions$.pipe(
		ofType(AquariumsActions.loadAquarium),
		switchMap(({ id }) => apiClient.aquarium_GetAquariumById(id).pipe(
			map(data => AquariumsActions.loadAquariumSuccess({ aquarium: data.result })),
			catchError(() => [AquariumsActions.loadAquariumFailed()])
		))
	)
}, { functional: true });

export const loadAquariumSuccess = createEffect((actions$ = inject(Actions)) => {
	return actions$.pipe(
		ofType(AquariumsActions.loadAquariumSuccess),
		map(({ aquarium }) => AquariumsActions.selectAquarium({ id: aquarium.id }))
	)
}, { functional: true })