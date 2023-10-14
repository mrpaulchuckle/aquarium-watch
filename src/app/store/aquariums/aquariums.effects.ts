import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ApiClient } from "src/swagger/api-client";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AquariumsActions } from "./aquariums.actions";
import { catchError, map, switchMap } from "rxjs";

@Injectable()
export class AquariumsEffects {
    constructor(private actions$: Actions, private apiClient: ApiClient, private store: Store){}

	loadAquariums$ = createEffect(() => this.actions$.pipe(
		ofType(AquariumsActions.loadAquariums),
		switchMap(_ => this.apiClient.aquarium_GetAquariums().pipe(
			map(data => AquariumsActions.loadAquariumsSuccess({ aquariums: data.result })),
			catchError(() => [AquariumsActions.loadAquariumsFailed()])
		))
	));
}