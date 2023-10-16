import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ApiClient } from "src/swagger/api-client";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AquariumsActions } from "./aquariums.actions";
import { EMPTY, catchError, map, switchMap } from "rxjs";

@Injectable()
export class AquariumsEffects {
    constructor(private actions$: Actions, private apiClient: ApiClient){}

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

	deleteAquarium$ = createEffect(() => this.actions$.pipe(
		ofType(AquariumsActions.deleteAquarium),
		switchMap(({ id }) => this.apiClient.aquarium_DeleteAquarium(id).pipe(
			map(_ => AquariumsActions.deleteAquariumSuccess({ id })),
			catchError(() => EMPTY)
		))
	));
}